const base = 'font-label-md text-label-md px-space-md py-space-xs rounded-lg transition-all';
const activeCls = `${base} bg-primary text-on-primary shadow-sm flex items-center gap-space-xs`;
const idleCls = `${base} text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center gap-space-xs`;

export default function TermTabs({ terms, activeId, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Semester"
      className="flex items-center gap-space-sm bg-surface-container-lowest p-1 rounded-xl shadow-sm"
    >
      {terms.map((term) => (
        <button
          key={term.id}
          type="button"
          role="tab"
          aria-selected={activeId === term.id}
          onClick={() => onChange(term.id)}
          className={activeId === term.id ? activeCls : idleCls}
        >
          <span>{term.label}</span>
          {term.showDot && <span className="w-2 h-2 rounded-full bg-secondary-fixed" />}
        </button>
      ))}
    </div>
  );
}
