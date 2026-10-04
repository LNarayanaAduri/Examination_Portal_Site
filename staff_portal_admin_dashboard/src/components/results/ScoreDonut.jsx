// r = 15.915 gives a circumference of ~100, so dasharray values read as percentages.
export default function ScoreDonut({ percent }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
        <circle className="stroke-surface-container-high" cx="18" cy="18" r="15.915" fill="none" strokeWidth="3" />
        <circle
          className="stroke-secondary transition-all duration-700"
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${percent}, 100`}
        />
      </svg>
      <span className="absolute font-code-sm text-code-sm font-bold text-on-surface">{percent}%</span>
    </div>
  );
}
