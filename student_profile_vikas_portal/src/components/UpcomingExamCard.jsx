import Icon from "./Icon.jsx";
import { upcomingExam as exam } from "../data.js";

export default function UpcomingExamCard() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg sm:p-space-xl shadow-sm flex flex-col gap-space-lg relative overflow-hidden">
      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary-container text-on-primary">
            <Icon name="alarm" className="text-[18px]" />
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
            Immediate Assessment
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-semibold self-start sm:self-auto shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
          </span>
          {exam.startsIn}
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-space-xs">
        <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wide">
          Course Code: {exam.courseCode}
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">{exam.title}</h2>
      </div>

      {/* Schedule details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md p-space-md bg-surface-container-low rounded-lg">
        {exam.details.map((d) => (
          <div key={d.label} className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">{d.label}</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {d.value}
            </span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">{d.sub}</span>
          </div>
        ))}
      </div>

      {/* Syllabus */}
      <div className="flex flex-col gap-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
          Syllabus Scope
        </span>
        <div className="p-space-md bg-surface-container rounded-lg flex items-start gap-space-sm">
          <Icon name="menu_book" className="text-[20px] text-on-surface-variant mt-0.5" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {exam.syllabus.modules}
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              {exam.syllabus.topics}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md pt-space-xs">
        <button
          type="button"
          className="h-11 px-6 rounded-lg bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-space-sm font-label-md text-label-md font-semibold shadow-sm"
        >
          <Icon name="assignment" className="text-[20px]" />
          <span>View Exam Instructions &amp; Hall Ticket</span>
        </button>
        <span className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1 self-center sm:self-auto">
          <Icon name="lock" className="text-[16px] text-secondary" />
          {exam.unlockNote}
        </span>
      </div>

      {/* Queue */}
      <div className="pt-space-md flex flex-col gap-space-sm">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
          Next In Queue
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          {exam.queue.map((q) => (
            <div
              key={q.title}
              className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between"
            >
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  {q.title}
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">{q.when}</span>
              </div>
              <Icon name={q.icon} className="text-[20px] text-on-surface-variant" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
