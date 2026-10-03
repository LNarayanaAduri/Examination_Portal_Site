import Icon from '../Icon.jsx';

const gradeClass = (grade) =>
  grade === 'A+'
    ? 'bg-secondary-container text-on-secondary-container'
    : 'bg-surface-container-high text-on-surface';

function ResultRow({ exam, selected, onSelect }) {
  return (
    <tr
      onClick={() => onSelect(exam.id)}
      className={`transition-colors cursor-pointer group ${
        selected ? 'bg-secondary/5 hover:bg-secondary/10' : 'hover:bg-surface-container-low'
      }`}
    >
      <td className="py-3.5 px-space-md">
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-secondary transition-colors">
            {exam.title}
          </span>
          <span className="font-code-sm text-code-sm text-on-surface-variant">
            {exam.id} • {exam.topics}
          </span>
        </div>
      </td>
      <td className="py-3.5 px-space-sm text-on-surface-variant font-code-sm text-code-sm hidden sm:table-cell">
        {exam.date}
      </td>
      <td className="py-3.5 px-space-sm text-right font-code-sm text-code-sm font-semibold text-on-surface">
        {exam.score} <span className="text-on-surface-variant font-normal">/ {exam.maxScore}</span>
      </td>
      <td className="py-3.5 px-space-sm text-center">
        <span
          className={`inline-block px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold ${gradeClass(
            exam.grade
          )}`}
        >
          {exam.grade}
        </span>
      </td>
      <td className="py-3.5 px-space-sm text-right font-code-sm text-code-sm font-medium text-on-surface hidden md:table-cell">
        {exam.percentile}%
      </td>
      <td className="py-3.5 px-space-sm text-center">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {exam.status}
        </span>
      </td>
      <td className="py-3.5 px-space-md text-right">
        <button
          type="button"
          aria-pressed={selected}
          aria-label={`View details for ${exam.title}`}
          className={`inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold px-2 py-1 rounded hover:bg-surface-container transition-colors ${
            selected
              ? 'text-secondary hover:text-on-secondary-container'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span>Details</span>
          <Icon name="chevron_right" className="text-[16px]" />
        </button>
      </td>
    </tr>
  );
}

export default function ResultsTable({ exams, selectedId, onSelect, gradingNote, ledgerHash }) {
  return (
    <div className="lg:col-span-7 xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-space-md bg-surface-container-low/60 flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="font-headline-sm text-headline-sm text-on-surface">Term Transcript Sheet</span>
          <span className="font-code-sm text-code-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
            {exams.length} {exams.length === 1 ? 'Examination' : 'Examinations'}
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Click any entry to inspect module breakdown
        </span>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wide uppercase">
              <th scope="col" className="py-3 px-space-md">Exam &amp; Subject</th>
              <th scope="col" className="py-3 px-space-sm hidden sm:table-cell">Date</th>
              <th scope="col" className="py-3 px-space-sm text-right">Marks</th>
              <th scope="col" className="py-3 px-space-sm text-center">Grade</th>
              <th scope="col" className="py-3 px-space-sm text-right hidden md:table-cell">Percentile</th>
              <th scope="col" className="py-3 px-space-sm text-center">Status</th>
              <th scope="col" className="py-3 px-space-md text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container text-body-sm font-body-sm">
            {exams.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-10 text-center text-on-surface-variant">
                  No examinations match your search.
                </td>
              </tr>
            ) : (
              exams.map((exam) => (
                <ResultRow
                  key={exam.id}
                  exam={exam}
                  selected={exam.id === selectedId}
                  onSelect={onSelect}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="p-space-md bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-space-sm border-t border-surface-container">
        <span className="font-label-sm text-label-sm text-on-surface-variant">{gradingNote}</span>
        <div className="flex items-center gap-space-xs text-on-surface-variant font-code-sm text-code-sm">
          <Icon name="lock" className="text-[16px] text-secondary" />
          <span>Ledger Hash: {ledgerHash}</span>
        </div>
      </div>
    </div>
  );
}
