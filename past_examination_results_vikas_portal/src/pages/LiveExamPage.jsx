import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import ProctorTicker from '../components/exam/ProctorTicker.jsx';
import ExamSubHeader from '../components/exam/ExamSubHeader.jsx';
import QuestionCard from '../components/exam/QuestionCard.jsx';
import ProctorNotice from '../components/exam/ProctorNotice.jsx';
import TimerCard from '../components/exam/TimerCard.jsx';
import ReferenceCard from '../components/exam/ReferenceCard.jsx';
import QuestionPalette from '../components/exam/QuestionPalette.jsx';
import SubmitModal from '../components/exam/SubmitModal.jsx';
import FormulaModal from '../components/exam/FormulaModal.jsx';
import CalculatorModal from '../components/exam/CalculatorModal.jsx';
import { useCountdown } from '../hooks/useCountdown.js';
import { useExamSession } from '../hooks/useExamSession.js';
import { demoSession } from '../data/seedSession.js';
import { questions } from '../data/questions.js';
import { exam } from '../data/exam.js';

export default function LiveExamPage() {
  const session = useExamSession(demoSession(exam.totalQuestions), exam.marksCorrect);
  const { current, answers, status, counts, estimatedScore, actions } = session;

  const [submitted, setSubmitted] = useState(false);
  const [submitOpen, setSubmitOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  const submitExam = useCallback(() => {
    setSubmitOpen(false);
    setSubmitted(true);
    // TODO: send answers to your API here
  }, []);

  const remaining = useCountdown(exam.remainingSeconds, {
    running: !submitted,
    onExpire: submitExam, // "Auto-submits when 00:00:00"
  });

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-margin py-space-2xl text-center">
        <Icon name="task_alt" className="text-secondary text-[48px]" />
        <h1 className="font-headline-md text-headline-md text-on-surface mt-2 mb-2">
          Assessment submitted
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          You answered {counts.answered} of {exam.totalQuestions} questions. Your responses are on their way
          to automated evaluation.
        </p>
        <Link
          to="/past-results"
          className="inline-flex px-5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md"
        >
          View past results
        </Link>
      </div>
    );
  }

  const question = questions[current - 1];

  return (
    <div className="flex flex-col w-full">
      <ProctorTicker />
      <ExamSubHeader
        current={current}
        total={exam.totalQuestions}
        onSubmitClick={() => setSubmitOpen(true)}
      />

      <div className="max-w-[1720px] mx-auto w-full px-margin py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Workspace */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <QuestionCard
              question={question}
              selected={answers[current]}
              isFirst={current === 1}
              isLast={current === exam.totalQuestions}
              onSelect={actions.select}
              onClear={actions.clear}
              onMarkNext={actions.markNext}
              onPrev={actions.prev}
              onSaveNext={actions.saveNext}
            />
            <ProctorNotice />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-5">
            <TimerCard remaining={remaining} />
            <ReferenceCard
              onOpenCalculator={() => setCalcOpen(true)}
              onOpenFormulas={() => setFormulaOpen(true)}
            />
            <QuestionPalette
              status={status}
              answers={answers}
              current={current}
              counts={counts}
              estimatedScore={estimatedScore}
              onGoTo={actions.goTo}
            />
          </aside>
        </div>
      </div>

      <SubmitModal
        open={submitOpen}
        counts={counts}
        remaining={remaining}
        onClose={() => setSubmitOpen(false)}
        onConfirm={submitExam}
      />
      <FormulaModal open={formulaOpen} onClose={() => setFormulaOpen(false)} />
      <CalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} />
    </div>
  );
}
