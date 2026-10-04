import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";

function StudentRow({ s, onView }) {
  const trendColor = s.up ? "text-secondary" : "text-error";
  return (
    <tr className="hover:bg-surface-container-low/60 transition-colors">
      <td className="py-3 px-4 font-code-sm text-code-sm text-on-surface-variant font-medium">{s.roll}</td>
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full ${s.avatarClass} font-label-md flex items-center justify-center font-bold`}>
            {s.initials}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-md text-label-md text-on-surface truncate">{s.name}</span>
            <span className="font-code-sm text-[11px] text-on-surface-variant truncate">{s.email}</span>
          </div>
        </div>
      </td>
      <td className="py-3 px-4">
        <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface">{s.section}</span>
      </td>
      <td className="py-3 px-4 text-right">
        <div className="inline-flex items-center gap-2">
          <span className={`font-timer-display text-label-md font-bold ${s.danger ? "text-error" : "text-on-surface"}`}>
            {s.score} / 100
          </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full ${s.gradeClass} font-label-sm text-[11px] font-bold`}>
            {s.grade}
          </span>
        </div>
      </td>
      <td className="py-3 px-4">
        <div className={`inline-flex items-center gap-1.5 ${trendColor} font-code-sm text-code-sm font-semibold`}>
          <Icon name={s.up ? "arrow_upward" : "arrow_downward"} size={16} />
          <span>
            {s.up ? "▲" : "▼"} {s.trend}% vs Unit 1
          </span>
        </div>
      </td>
      <td className="py-3 px-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${s.categoryClass} font-label-sm text-[11px] font-semibold uppercase`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${s.dotClass}`} />
          {s.category}
        </span>
      </td>
      <td className="py-3 px-4 text-right">
        <button
          onClick={() => onView(s)}
          className="inline-flex items-center gap-1 text-secondary hover:text-on-surface font-label-sm text-label-sm font-semibold transition-colors"
        >
          <span>View Detailed Answer Sheet</span>
          <Icon name="arrow_forward" size={16} />
        </button>
      </td>
    </tr>
  );
}

function ExportMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const act = (msg) => (e) => {
    e.preventDefault();
    alert(msg);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="h-11 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 transition-colors"
      >
        <Icon name="download" size={18} />
        Export CSV / PDF
        <Icon name="arrow_drop_down" size={16} />
      </button>
      {open && (
        <div className="absolute right-0 top-12 w-48 rounded-lg bg-surface-container-lowest shadow-xl p-1 z-30">
          <a
            href="#"
            onClick={act("Exporting Class 12-A Performance Report as CSV...")}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-surface-container-low text-on-surface font-body-sm text-body-sm"
          >
            <Icon name="table_view" size={18} className="text-secondary" />
            Export as CSV (.xlsx)
          </a>
          <a
            href="#"
            onClick={act("Generating Certified PDF Roster with Dean Stamp...")}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-surface-container-low text-on-surface font-body-sm text-body-sm"
          >
            <Icon name="picture_as_pdf" size={18} className="text-error" />
            Export Signed PDF
          </a>
        </div>
      )}
    </div>
  );
}

function EmptyState({ onReset, onDismiss }) {
  return (
    <div className="py-space-2xl px-space-lg flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-space-md">
        <Icon name="manage_search" size={32} />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">No results available for this filter combination</h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-1">
        We couldn't find any candidate or evaluation data matching your query in Class 12-A. Check spelling or clear your criteria.
      </p>
      <div className="mt-space-lg flex items-center gap-space-sm">
        <button
          onClick={onReset}
          className="h-10 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-container-highest hover:text-on-surface transition-colors"
        >
          Reset Filter &amp; Search
        </button>
        <button
          onClick={onDismiss}
          className="h-10 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
        >
          Dismiss Empty View
        </button>
      </div>
    </div>
  );
}

export default function StudentTable({ students, query, onQueryChange, noData, onView, onReset, onDismissEmpty }) {
  const count = noData ? 0 : students.length;
  const showEmpty = noData || students.length === 0;
  const badge = noData
    ? "Showing 0 Students in Class 12-A"
    : query.trim()
    ? `Showing ${count} Student${count === 1 ? "" : "s"} in Class 12-A`
    : "Showing 38 Students in Class 12-A";

  return (
    <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm mb-space-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-lg">
        <div className="flex items-center gap-space-sm">
          <h2 className="font-headline-md text-headline-md text-on-surface">Detailed Student Performance Table</h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-code-sm text-code-sm font-semibold">
            {badge}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          <div className="relative min-w-[280px]">
            <Icon name="search" className="absolute left-3.5 top-3 text-on-surface-variant" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search by student name or roll number..."
              className="w-full h-11 pl-10 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-all"
            />
          </div>
          <ExportMenu />
        </div>
      </div>

      {!showEmpty && (
        <div className="overflow-x-auto -mx-space-lg px-space-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <th className="py-3.5 px-4 rounded-l-lg">Roll Number</th>
                <th className="py-3.5 px-4">Student Name</th>
                <th className="py-3.5 px-4">Section</th>
                <th className="py-3.5 px-4 text-right">Latest Score</th>
                <th className="py-3.5 px-4">Score Trend vs Previous</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4 rounded-r-lg text-right">Action</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md text-on-surface">
              {students.map((s) => (
                <StudentRow key={s.roll} s={s} onView={onView} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showEmpty && <EmptyState onReset={onReset} onDismiss={onDismissEmpty} />}

      <div className="pt-space-lg mt-space-md flex flex-wrap items-center justify-between gap-space-md text-on-surface-variant">
        <div className="flex items-center gap-2">
          <Icon name="verified_user" size={18} />
          <span className="font-code-sm text-code-sm">Marks synchronized with Central Examination Server • Hash: JC-882B</span>
        </div>
        <div className="flex items-center gap-space-xs font-label-sm text-label-sm">
          <button className="w-8 h-8 rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" title="Previous page">
            <Icon name="chevron_left" size={18} />
          </button>
          <span className="px-3 py-1 rounded bg-secondary text-on-secondary font-semibold">1</span>
          <span className="px-3 py-1 text-on-surface">2</span>
          <button className="w-8 h-8 rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" title="Next page">
            <Icon name="chevron_right" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
