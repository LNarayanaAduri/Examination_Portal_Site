import Icon from '../Icon.jsx';
import OptionItem from './OptionItem.jsx';

function Fraction({ num, den }) {
  return (
    <span className="inline-block align-middle mx-1">
      <span className="block pb-1">{num}</span>
      <span className="block pt-1 bg-outline-variant h-[1.5px] w-full" />
      <span className="block pt-1">{den}</span>
    </span>
  );
}

const secondaryBtn =
  'px-3.5 py-2 rounded-lg font-label-md text-label-md transition-colors flex items-center gap-1.5 cursor-pointer';

export default function QuestionCard({
  question,
  selected,
  isFirst,
  isLast,
  onSelect,
  onClear,
  onMarkNext,
  onPrev,
  onSaveNext,
}) {
  const { stem, expression, evaluate } = question;

  return (
    <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-6 sm:p-8 flex flex-col relative overflow-hidden">
      {/* Decorative watermark */}
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-8 text-surface-container opacity-40 select-none pointer-events-none"
      >
        <span className="font-headline-lg text-[130px] font-bold">∫dx</span>
      </div>

      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold">
            {question.id}
          </span>
          <span className="font-label-md text-label-md px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-medium">
            {question.type}
          </span>
          <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-high text-on-primary-fixed-variant">
            {question.section}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-surface-container px-3 py-1 rounded-full">
          <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
            <Icon name="add_circle" className="text-[16px]" /> +{question.marks.plus.toFixed(1)}
          </span>
          <span className="text-outline text-label-sm">/</span>
          <span className="flex items-center gap-1 font-label-sm text-label-sm text-error font-semibold">
            <Icon name="remove_circle" className="text-[16px]" /> -{question.marks.minus.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Stem */}
      <div className="mb-8">
        <h2 className="font-body-lg text-body-lg text-on-surface leading-relaxed font-normal mb-4">
          {stem.pre}
          {stem.code && (
            <>
              {' '}
              <span className="font-code-sm font-semibold bg-surface-container px-1.5 py-0.5 rounded">
                {stem.code}
              </span>
            </>
          )}
          {stem.post && <> {stem.post}</>}
        </h2>

        {expression && (
          <div className="my-5 p-5 rounded-lg bg-surface-container-low flex flex-col items-center justify-center text-center">
            <div className="font-code-sm text-base text-on-surface font-semibold tracking-wide">
              {expression.lhs} <Fraction num={expression.num} den={expression.den} />
              {'\u00A0'} {expression.suffix}
            </div>
            {evaluate && (
              <p className="font-body-md text-body-md text-on-surface-variant mt-4">
                {evaluate.prefix}
                {'\u00A0 '}
                <span className="font-code-sm text-on-surface font-semibold">
                  {evaluate.lim} <sub>{evaluate.sub}</sub> {evaluate.fn}
                </span>
              </p>
            )}
          </div>
        )}
      </div>

      {/* Options */}
      <fieldset aria-label="Answer Options" className="flex flex-col gap-3.5 mb-8">
        <legend className="sr-only">Select one option</legend>
        {question.options.map((option) => (
          <OptionItem
            key={option.id}
            option={option}
            name={`question-${question.id}`}
            selected={selected === option.id}
            onSelect={onSelect}
          />
        ))}
      </fieldset>

      {/* Actions */}
      <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClear}
            className={`${secondaryBtn} text-on-surface-variant hover:text-on-surface hover:bg-surface-container`}
          >
            <Icon name="ink_eraser" className="text-[18px]" />
            <span>Clear Response</span>
          </button>
          <button
            type="button"
            onClick={onMarkNext}
            className={`${secondaryBtn} bg-surface-container-high text-on-surface hover:bg-surface-container-highest`}
          >
            <Icon name="bookmark" className="text-[18px] text-[#7C3AED]" />
            <span>Mark for Review &amp; Next</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            disabled={isFirst}
            className="px-4 py-2 text-on-surface bg-surface-container hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Icon name="arrow_back" className="text-[18px]" />
            <span>Previous</span>
          </button>
          <button
            type="button"
            onClick={onSaveNext}
            className="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all shadow-sm font-label-md text-label-md flex items-center gap-2 cursor-pointer"
          >
            <span>{isLast ? 'Save Answer' : 'Save & Next Question'}</span>
            <Icon name={isLast ? 'check' : 'arrow_forward'} className="text-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
