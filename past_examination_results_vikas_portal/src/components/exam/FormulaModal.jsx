import Icon from '../Icon.jsx';
import Modal from '../Modal.jsx';
import { formulaSections } from '../../data/formulas.js';

export default function FormulaModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="formula-title" widthClass="max-w-xl">
      <div className="flex items-center justify-between pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Icon name="functions" className="text-secondary text-[24px]" />
          <h3 id="formula-title" className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Calculus Reference Sheet
          </h3>
        </div>
        <button
          type="button"
          aria-label="Close formula sheet"
          onClick={onClose}
          className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container"
        >
          <Icon name="close" className="text-[20px]" />
        </button>
      </div>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
        {formulaSections.map((section) => (
          <div key={section.id} className="p-3 bg-surface-container-low rounded-lg">
            <p className="font-label-sm text-label-sm font-semibold text-secondary uppercase mb-1">
              {section.title}
            </p>
            {section.lines.map((line, i) => (
              <p
                key={i}
                className={
                  line.mono
                    ? `font-code-sm text-code-sm text-on-surface ${i > 0 ? 'mt-1' : ''}`
                    : 'font-body-sm text-body-sm text-on-surface leading-normal'
                }
              >
                {line.text}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
