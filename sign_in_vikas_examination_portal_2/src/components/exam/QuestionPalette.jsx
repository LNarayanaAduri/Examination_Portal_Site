import { useState } from 'react';
import { exam } from '../../data/exam.js';

const STATUS_LABEL = {
  answered: 'Answered',
  marked: 'Marked for Review',
  unanswered: 'Unanswered',
  'not-visited': 'Not Visited',
};

const STATUS_STYLE = {
  answered: 'bg-secondary text-on-secondary font-semibold shadow-sm hover:scale-105',
  marked: 'bg-[#D97706] text-on-primary font-semibold shadow-sm hover:scale-105',
  unanswered: 'bg-surface-container text-on-surface-variant font-medium hover:bg-surface-container-high',
  'not-visited': 'bg-surface-container-lowest text-outline font-medium shadow-sm hover:bg-surface-container',
};

const CURRENT_STYLE = 'bg-primary-container text-on-primary font-bold shadow-md scale-105';

function LegendItem({ swatch, label, value, strong }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3.5 h-3.5 rounded shrink-0 ${swatch}`} />
      <span
        className={`font-body-sm text-body-sm ${
          strong ? 'text-on-surface font-medium' : 'text-on-surface-variant'
        }`}
      >
        {label}: <strong className="font-code-sm">{value}</strong>
      </span>
    </div>
  );
}

export default function QuestionPalette({ status, answers, current, counts, estimatedScore, onGoTo }) {
  const [filter, setFilter] = useState('all');

  const numbers = Array.from({ length: exam.totalQuestions }, (_, i) => i + 1).filter((n) => {
    if (filter === 'answered') return status[n] === 'answered';
    if (filter === 'marked') return status[n] === 'marked';
    return true;
  });

  const tabs = [
    { id: 'all', label: `All (${exam.totalQuestions})` },
    { id: 'answered', label: `Answered (${counts.answered})` },
    { id: 'marked', label: `Marked (${counts.marked})` },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col">
      <div className="flex items-center justify-between pb-4 mb-4">
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Question Palette</h3>
        <span className="font-code-sm text-code-sm px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-medium">
          {exam.totalQuestions} Total
        </span>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2.5 mb-5 pb-5 bg-surface-container-low p-3 rounded-lg">
        <LegendItem swatch="bg-secondary" label="Answered" value={counts.answered} strong />
        <LegendItem swatch="bg-surface-container-high" label="Unanswered" value={counts.unanswered} />
        <LegendItem swatch="bg-[#D97706]" label="Marked" value={counts.marked} strong />
        <LegendItem
          swatch="bg-surface-container-lowest shadow-sm"
          label="Not Visited"
          value={counts.notVisited}
        />
      </div>

      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter questions"
        className="flex items-center gap-1.5 p-1 bg-surface-container rounded-lg mb-5 text-label-sm font-label-sm"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={filter === tab.id}
            onClick={() => setFilter(tab.id)}
            className={`flex-1 py-1 px-2 rounded-md text-center ${
              filter === tab.id
                ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {numbers.length === 0 ? (
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center py-6">
          No questions in this view yet.
        </p>
      ) : (
        <div className="grid grid-cols-5 gap-2.5">
          {numbers.map((n) => {
            const isCurrent = n === current;
            const st = status[n];
            const hasSavedAnswer = st === 'marked' && Boolean(answers[n]);
            const title = `Question ${n} (${isCurrent ? 'Current Question' : STATUS_LABEL[st]})`;
            return (
              <button
                key={n}
                type="button"
                title={title}
                aria-label={title}
                aria-current={isCurrent ? 'true' : undefined}
                onClick={() => onGoTo(n)}
                className={`h-10 rounded-lg font-timer-display text-sm flex items-center justify-center relative transition-transform ${
                  isCurrent ? CURRENT_STYLE : STATUS_STYLE[st]
                }`}
              >
                {n}
                {hasSavedAnswer && !isCurrent && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-error" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Score summary */}
      <div className="mt-6 pt-5 bg-surface-container-low rounded-xl p-3.5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Estimated Score</span>
          <span className="font-code-sm text-code-sm font-bold text-secondary">
            +{estimatedScore.toFixed(1)} Possible
          </span>
        </div>
        <div className="h-7 w-[1px] bg-surface-container-high" />
        <div className="flex flex-col text-right">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Negative Margin</span>
          <span className="font-code-sm text-code-sm font-bold text-error">
            {exam.negativeMargin.toFixed(1)} {exam.negativeMargin === 0 ? '(Clean)' : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
