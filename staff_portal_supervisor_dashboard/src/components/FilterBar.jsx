import Icon from "./Icon.jsx";
import { CLASS_OPTIONS, SUBJECT_OPTIONS, TERM_OPTIONS } from "../data.js";

function SelectField({ id, label, icon, value, options, onChange }) {
  return (
    <div className="md:col-span-3 flex flex-col gap-1.5">
      <label
        className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5"
        htmlFor={id}
      >
        <Icon name={icon} size={16} className="text-secondary" />
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 pl-3.5 pr-9 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all appearance-none cursor-pointer"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <Icon name="expand_more" className="absolute right-3 top-3 pointer-events-none text-on-surface-variant" />
      </div>
    </div>
  );
}

export default function FilterBar({ draft, onDraftChange, onApply, onReset }) {
  return (
    <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm mb-space-xl">
      <form
        className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-end"
        onSubmit={(e) => {
          e.preventDefault();
          onApply();
        }}
      >
        <SelectField
          id="filterClass" label="Class & Section" icon="school" value={draft.cls} options={CLASS_OPTIONS}
          onChange={(v) => onDraftChange({ cls: v })}
        />
        <SelectField
          id="filterSubject" label="Subject" icon="calculate" value={draft.subject} options={SUBJECT_OPTIONS}
          onChange={(v) => onDraftChange({ subject: v })}
        />
        <SelectField
          id="filterTerm" label="Date Range / Term" icon="event_repeat" value={draft.term} options={TERM_OPTIONS}
          onChange={(v) => onDraftChange({ term: v })}
        />
        <div className="md:col-span-3 flex items-center gap-space-sm pt-2 md:pt-0">
          <button
            type="submit"
            className="flex-1 h-11 px-5 rounded-lg bg-primary text-on-primary hover:bg-surface-container-highest hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Icon name="filter_alt" size={18} />
            Apply Filters
          </button>
          <button
            type="button"
            title="Reset all filters"
            onClick={onReset}
            className="h-11 px-3.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors flex items-center justify-center"
          >
            Reset to All
          </button>
        </div>
      </form>
    </section>
  );
}
