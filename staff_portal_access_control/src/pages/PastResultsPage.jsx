import { useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import AdvisoryBar from '../components/AdvisoryBar.jsx';
import Toast from '../components/Toast.jsx';
import TermTabs from '../components/results/TermTabs.jsx';
import StatsBanner from '../components/results/StatsBanner.jsx';
import ResultsToolbar from '../components/results/ResultsToolbar.jsx';
import ResultsTable from '../components/results/ResultsTable.jsx';
import ExamDetailPanel from '../components/results/ExamDetailPanel.jsx';
import AttestationCard from '../components/results/AttestationCard.jsx';
import TermEmptyState from '../components/results/TermEmptyState.jsx';
import { useToast } from '../hooks/useToast.js';
import { urgentAdvisory } from '../data/advisories.js';
import { terms } from '../data/results.js';

function searchText(exam) {
  return [
    exam.title,
    exam.id,
    exam.subject,
    exam.topics,
    exam.date,
    `${exam.score} / ${exam.maxScore}`,
    exam.grade,
    `${exam.percentile}%`,
    exam.status,
  ]
    .join(' ')
    .toLowerCase();
}

export default function PastResultsPage() {
  const [termId, setTermId] = useState('sem1');
  const [selectedId, setSelectedId] = useState(terms[0].exams[0].id);
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('All');
  const { toast, show } = useToast();

  const term = terms.find((t) => t.id === termId);
  const hasExams = term.exams.length > 0;

  const subjects = useMemo(() => [...new Set(term.exams.map((e) => e.subject))], [term]);

  const visibleExams = useMemo(() => {
    const q = query.trim().toLowerCase();
    return term.exams.filter(
      (exam) => (subject === 'All' || exam.subject === subject) && (q === '' || searchText(exam).includes(q))
    );
  }, [term, query, subject]);

  // The detail panel keeps showing the selected exam even if a filter hides its row.
  const selectedExam = term.exams.find((e) => e.id === selectedId) ?? term.exams[0];

  const handleDownload = () => {
    // TODO: request the certified PDF from your API
    show(`Generating certified PDF for ${selectedExam.id}...`);
  };

  const handleReeval = () => {
    // TODO: submit the re-evaluation request to your API
    const ack = Math.floor(1000 + Math.random() * 9000);
    show(`Re-evaluation request lodged for ${selectedExam.id}. Acknowledgment: #REV-${ack}`);
  };

  return (
    <div className="flex flex-col w-full">
      <AdvisoryBar message={urgentAdvisory} />

      <div className="w-full px-margin py-space-xl flex flex-col gap-space-xl max-w-7xl mx-auto">
        {/* Heading + term tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs text-secondary mb-1">
              <Icon name="verified_user" className="text-[18px]" />
              <span className="font-code-sm text-code-sm tracking-wider uppercase font-semibold">
                Verified Academic Records
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Past Examination Results &amp; Transcript Records
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Official authenticated grade book and section-wise performance telemetry for Vikas Junior College.
            </p>
          </div>
          <TermTabs terms={terms} activeId={termId} onChange={setTermId} />
        </div>

        {term.stats && <StatsBanner stats={term.stats} />}

        {hasExams ? (
          <div className="flex flex-col gap-space-lg">
            <ResultsToolbar
              query={query}
              onQueryChange={setQuery}
              subject={subject}
              onSubjectChange={setSubject}
              subjects={subjects}
              period={term.period}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <ResultsTable
                exams={visibleExams}
                selectedId={selectedExam.id}
                onSelect={setSelectedId}
                gradingNote={term.gradingNote}
                ledgerHash={term.ledgerHash}
              />
              <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-space-md">
                <ExamDetailPanel exam={selectedExam} onDownload={handleDownload} onReeval={handleReeval} />
                <AttestationCard />
              </div>
            </div>
          </div>
        ) : (
          <TermEmptyState
            title={term.emptyTitle}
            body={term.emptyBody}
            onReturn={() => setTermId('sem1')}
          />
        )}
      </div>

      <Toast visible={toast.visible} message={toast.message} success={toast.success} />
    </div>
  );
}
