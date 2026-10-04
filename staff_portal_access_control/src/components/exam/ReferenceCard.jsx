import Icon from '../Icon.jsx';

const iconBtn =
  'p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors';

export default function ReferenceCard({ onOpenCalculator, onOpenFormulas }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
          <Icon name="functions" className="text-[20px]" />
        </div>
        <div>
          <span className="font-label-md text-label-md text-on-surface block leading-tight">
            Calculus Reference
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Formulas &amp; Constants</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={iconBtn}
          title="Launch Scientific Calculator"
          aria-label="Launch Scientific Calculator"
          onClick={onOpenCalculator}
        >
          <Icon name="calculate" className="text-[20px]" />
        </button>
        <button
          type="button"
          className={iconBtn}
          title="Open Formula Reference Sheet"
          aria-label="Open Formula Reference Sheet"
          onClick={onOpenFormulas}
        >
          <Icon name="menu_book" className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}
