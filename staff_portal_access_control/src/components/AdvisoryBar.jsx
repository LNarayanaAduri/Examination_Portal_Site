export default function AdvisoryBar({ message }) {
  return (
    <div
      role="region"
      aria-label="Urgent advisory"
      className="w-full bg-error-container text-on-error-container px-margin py-2 border-b border-error/20 flex items-center gap-space-sm overflow-hidden text-body-sm font-body-sm shadow-sm"
    >
      <span className="inline-flex items-center gap-1 bg-error text-on-error px-2.5 py-0.5 rounded-full font-label-sm text-[12px] font-bold tracking-wide uppercase shrink-0">
        <span aria-hidden="true">📢</span> URGENT ADVISORY:
      </span>
      <div className="advisory-marquee flex-1 min-w-0 font-medium">
        <span>{message}</span>
      </div>
    </div>
  );
}
