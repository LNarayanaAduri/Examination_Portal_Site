import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';

export default function TermEmptyState({ title, body, onReturn }) {
  return (
    <div className="flex flex-col items-center justify-center p-space-2xl bg-surface-container-lowest rounded-xl shadow-sm text-center py-20">
      <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-space-md">
        <Icon name="history_edu" className="text-[40px]" />
      </div>
      <span className="font-headline-md text-headline-md text-on-surface font-bold">{title}</span>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2">{body}</p>
      <div className="flex flex-wrap justify-center items-center gap-space-sm mt-space-lg">
        <button
          type="button"
          onClick={onReturn}
          className="px-space-lg py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-space-xs shadow-sm"
        >
          <Icon name="arrow_back" className="text-[18px]" />
          <span>Return to Semester 1 Results</span>
        </button>
        <Link
          to="/exam-schedule"
          className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs"
        >
          <Icon name="calendar_today" className="text-[18px]" />
          <span>View Term 2 Timetable</span>
        </Link>
      </div>
    </div>
  );
}
