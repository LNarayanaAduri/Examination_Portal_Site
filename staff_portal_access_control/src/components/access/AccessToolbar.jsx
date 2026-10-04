import Icon from '../Icon.jsx';
import { campusScope } from '../../data/accessControl.js';

export default function AccessToolbar({
  query,
  onQueryChange,
  departments,
  department,
  onDepartmentChange,
  overridesOnly,
  onToggleOverridesOnly,
  overrideCount,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-lg">
      <div className="relative flex-1 max-w-lg">
        <Icon
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
        />
        <label htmlFor="faculty-search" className="sr-only">
          Search faculty
        </label>
        <input
          id="faculty-search"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search faculty by name, department, or ID (e.g. 'Varma', 'Chemistry')..."
          className="w-full pl-10 pr-4 py-2 text-body-md font-body-md bg-surface-container-low text-on-surface rounded-lg border-0 placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all"
        />
      </div>

      <div className="flex flex-wrap items-center gap-space-sm">
        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg">
          <label htmlFor="dept-filter" className="font-label-sm text-label-sm text-on-surface-variant">
            Dept:
          </label>
          <select
            id="dept-filter"
            value={department}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="bg-transparent font-label-md text-label-md text-on-surface border-0 py-0 focus:outline-none focus:ring-0 cursor-pointer"
          >
            <option value="all">All Departments ({departments.length})</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          aria-pressed={overridesOnly}
          onClick={onToggleOverridesOnly}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-surface-container transition-colors ${
            overridesOnly
              ? 'bg-secondary-container/50 text-on-secondary-container'
              : 'bg-surface-container-low text-on-surface'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="font-label-md text-label-md">
            Custom Overrides: <strong className="text-secondary font-semibold">{overrideCount} Active</strong>
          </span>
        </button>

        <span className="font-code-sm text-code-sm text-on-surface-variant bg-surface-container px-2.5 py-1.5 rounded-lg">
          {campusScope}
        </span>
      </div>
    </div>
  );
}
