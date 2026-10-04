import Icon from '../Icon.jsx';
import ScoreDonut from './ScoreDonut.jsx';
import SectionCard from './SectionCard.jsx';

export default function ExamDetailPanel({ exam, onDownload, onReeval }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-lg relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-secondary/10 pointer-events-none blur-2xl" />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-code-sm text-code-sm text-secondary font-semibold">{exam.id}</span>
            <span className="text-on-surface-variant text-[12px]">•</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Evaluator Verified</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">{exam.title}</h2>
        </div>
        <span className="p-2 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center">
          <Icon name="terminal" className="text-[24px]" />
        </span>
      </div>

      {/* Score + percentile */}
      <div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between">
        <div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
            Total Score
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="font-display-lg text-display-lg font-bold text-on-surface">{exam.score}</span>
            <span className="font-body-md text-body-md text-on-surface-variant">/ {exam.maxScore}</span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm">
          <ScoreDonut percent={exam.percentile} />
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm font-semibold text-secondary">Percentile</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              Rank {exam.rank} / {exam.cohort}
            </span>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-space-sm">
        <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-space-xs">
          <Icon name="segment" className="text-[18px] text-secondary" />
          <span>Section-Wise Performance Breakdown</span>
        </span>
        {exam.sections.map((section, i) => (
          // Index keys keep the same bar element between exams, so widths animate.
          <SectionCard key={i} section={section} />
        ))}
      </div>

      {/* Instructor remark */}
      <div className="bg-surface-container-low/70 rounded-lg p-space-md flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <Icon name="rate_review" className="text-[18px] text-secondary" />
            <span className="font-label-sm text-label-sm font-semibold text-on-surface">
              Instructor Evaluation
            </span>
          </div>
          <span className="font-code-sm text-code-sm text-on-surface-variant">{exam.instructor}</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface italic mt-1">&ldquo;{exam.remark}&rdquo;</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-2">
        <button
          type="button"
          onClick={onDownload}
          className="w-full sm:flex-1 py-2.5 px-space-md bg-primary text-on-primary hover:bg-on-background rounded-lg font-label-md text-label-md transition-colors flex items-center justify-center gap-space-xs shadow-sm"
        >
          <Icon name="download" className="text-[18px]" />
          <span>Download Result PDF</span>
        </button>
        <button
          type="button"
          onClick={onReeval}
          className="w-full sm:w-auto py-2.5 px-space-md bg-surface-container-high text-on-surface hover:bg-surface-container rounded-lg font-label-md text-label-md transition-colors flex items-center justify-center gap-space-xs"
        >
          <Icon name="replay" className="text-[18px]" />
          <span>Request Re-evaluation</span>
        </button>
      </div>
    </div>
  );
}
