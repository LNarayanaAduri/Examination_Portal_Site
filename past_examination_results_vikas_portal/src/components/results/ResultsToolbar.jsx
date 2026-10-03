import Icon from '../Icon.jsx';

export default function ResultsToolbar({ query, onQueryChange, subject, onSubjectChange, subjects, period }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
      <div className="relative flex-1">
        <Icon
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
        />
        <label htmlFor="results-search" className="sr-only">
          Search results
        </label>
        <input
          id="results-search"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search by paper name, subject, or code..."
          className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant border-0 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container transition-all"
        />
      </div>

      <div className="flex flex-wrap items-center gap-space-sm">
        <div className="flex items-center gap-space-xs bg-surface-container-low px-3 py-1.5 rounded-lg">
          <Icon name="filter_list" className="text-[18px] text-on-surface-variant" />
          <label
            htmlFor="subject-filter"
            className="font-label-sm text-label-sm text-on-surface-variant font-medium"
          >
            Subject:
          </label>
          <select
            id="subject-filter"
            value={subject}
            onChange={(e) => onSubjectChange(e.target.value)}
            className="bg-transparent font-label-md text-label-md text-on-surface border-0 py-0 focus:outline-none focus:ring-0 cursor-pointer"
          >
            <option value="All">All Subjects</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-space-xs bg-surface-container-low px-3 py-1.5 rounded-lg">
          <Icon name="calendar_month" className="text-[18px] text-on-surface-variant" />
          <span className="font-label-md text-label-md text-on-surface font-medium">{period}</span>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          title="Print Academic Record"
          aria-label="Print Academic Record"
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg transition-colors"
        >
          <Icon name="print" className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}
