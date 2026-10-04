import Icon from '../Icon.jsx';
import { exam, student } from '../../data/exam.js';

export default function ExamSubHeader({ current, total, onSubmitClick }) {
  const percent = (current / total) * 100;

  return (
    <section className="sticky top-16 z-40 w-full bg-surface-container-lowest shadow-sm">
      <div className="max-w-[1720px] mx-auto px-margin py-3 flex flex-wrap items-center justify-between gap-space-md">
        {/* Title & meta */}
        <div className="flex items-center gap-space-md min-w-0">
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0 shadow-sm">
            <Icon name="calculate" className="text-[24px]" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-space-xs">
              <h1 className="font-headline-sm text-headline-sm text-on-surface truncate font-semibold">
                {exam.title}
              </h1>
              <span className="font-code-sm text-code-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-medium shrink-0">
                {exam.code}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
              <span>{student.name}</span>
              <span className="inline-block w-1 h-1 rounded-full bg-outline-variant" />
              <span className="font-code-sm text-code-sm">Roll: {student.roll}</span>
              <span className="inline-block w-1 h-1 rounded-full bg-outline-variant" />
              <span className="text-secondary font-medium">{student.section}</span>
            </p>
          </div>
        </div>

        {/* Question progress */}
        <div className="hidden xl:flex flex-col items-center justify-center min-w-[260px]">
          <div className="flex items-center justify-between w-full mb-1">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Question Progress</span>
            <span className="font-code-sm text-code-sm text-on-surface font-semibold">
              {String(current).padStart(2, '0')} <span className="text-outline">/ {total}</span> (
              {Math.round(percent)}%)
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
            <div
              className="h-full bg-secondary transition-all duration-300 rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={onSubmitClick}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-all shadow-sm font-label-md text-label-md cursor-pointer"
        >
          <Icon name="verified" className="text-[18px]" />
          <span className="whitespace-nowrap">Finish &amp; Submit</span>
        </button>
      </div>
    </section>
  );
}
