export default function SectionCard({ section }) {
  return (
    <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1.5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm font-medium text-on-surface">{section.name}</span>
        <span className="font-code-sm text-code-sm font-bold text-secondary">
          {section.score} / {section.max} ({section.pct}%)
        </span>
      </div>
      <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
        <div
          className="bg-secondary h-full rounded-full transition-all duration-500"
          style={{ width: `${section.pct}%` }}
        />
      </div>
      <div className="flex justify-between items-center text-on-surface-variant font-code-sm text-code-sm">
        <span>Questions Attempted: {section.attempted}</span>
        {section.note && (
          <span className={section.noteTone === 'good' ? 'text-secondary font-medium' : ''}>
            {section.note}
          </span>
        )}
      </div>
    </div>
  );
}
