import Icon from '../Icon.jsx';
import Modal from '../Modal.jsx';

// Placeholder for the scientific calculator (the original only showed an alert).
export default function CalculatorModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="calc-title">
      <div className="flex items-center gap-2 mb-3">
        <Icon name="calculate" className="text-secondary text-[24px]" />
        <h3 id="calc-title" className="font-headline-sm text-headline-sm font-bold text-on-surface">
          Scientific Calculator
        </h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
        Built-in Scientific Calculator overlay active. Candidate workspace initialized.
      </p>
      <div className="flex justify-end">
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
