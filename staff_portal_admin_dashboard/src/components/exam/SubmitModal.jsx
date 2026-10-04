import Icon from '../Icon.jsx';
import Modal from '../Modal.jsx';
import { exam } from '../../data/exam.js';
import { formatTime } from '../../utils/time.js';

function Row({ label, value, labelClass = 'text-on-surface-variant', valueClass = 'text-on-surface font-semibold' }) {
  return (
    <>
      <span className={labelClass}>{label}</span>
      <span className={`font-code-sm text-right ${valueClass}`}>{value}</span>
    </>
  );
}

export default function SubmitModal({ open, counts, remaining, onClose, onConfirm }) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="submit-title" paddingClass="p-6 sm:p-8">
      <div className="flex items-center gap-3 text-secondary mb-4">
        <Icon name="task_alt" className="text-[32px]" />
        <h3 id="submit-title" className="font-headline-lg text-headline-md font-bold text-on-surface">
          Submit Examination?
        </h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
        You are about to finalize and submit{' '}
        <strong className="text-on-surface">
          {exam.code}: {exam.shortTitle}
        </strong>
        . Once confirmed, your responses will be encrypted and submitted for automated evaluation.
      </p>

      <div className="bg-surface-container-low rounded-xl p-4 mb-6">
        <div className="grid grid-cols-2 gap-y-3 font-body-sm text-body-sm">
          <Row label="Total Questions:" value={exam.totalQuestions} />
          <Row
            label="Answered:"
            value={counts.answered}
            labelClass="text-secondary font-medium"
            valueClass="text-secondary font-bold"
          />
          <Row label="Marked for Review:" value={counts.marked} valueClass="text-[#D97706] font-semibold" />
          <Row
            label="Unanswered:"
            value={counts.unanswered + counts.notVisited}
            valueClass="text-error font-semibold"
          />
          <Row label="Time Remaining:" value={formatTime(remaining)} valueClass="text-on-surface font-bold" />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
        >
          Return to Exam
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="px-6 py-2.5 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-all font-label-md text-label-md shadow-sm font-semibold cursor-pointer"
        >
          Confirm &amp; End Test
        </button>
      </div>
    </Modal>
  );
}
