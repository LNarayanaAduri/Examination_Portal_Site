import { useMemo, useState } from "react";
import Icon from "./components/Icon.jsx";
import Sidebar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import FilterBar from "./components/FilterBar.jsx";
import StatCards from "./components/StatCards.jsx";
import AnalyticsSection from "./components/AnalyticsSection.jsx";
import StudentTable from "./components/StudentTable.jsx";
import AnswerSheetModal from "./components/AnswerSheetModal.jsx";
import { DEFAULT_FILTERS, STATS_BY_CLASS, STUDENTS } from "./data.js";

export default function App() {
  const [draft, setDraft] = useState(DEFAULT_FILTERS); // values in the dropdowns
  const [applied, setApplied] = useState(DEFAULT_FILTERS); // values after "Apply Filters"
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const noData = applied.cls === "EMPTY";
  const stats = STATS_BY_CLASS[applied.cls] ?? STATS_BY_CLASS["12-A"];

  const students = useMemo(() => {
    const q = query.trim().toLowerCase();
    return STUDENTS.filter((s) => s.name.toLowerCase().includes(q) || s.roll.toLowerCase().includes(q));
  }, [query]);

  const handleApply = () => {
    setApplied(draft);
    setQuery("");
  };

  const handleReset = () => {
    setDraft(DEFAULT_FILTERS);
    setApplied(DEFAULT_FILTERS);
    setQuery("");
  };

  return (
    <>
      <Sidebar />
      <div className="pl-72">
        <TopBar />
        <main className="relative pt-16 w-full px-space-xl bg-surface min-h-screen">
          <div className="flex flex-col w-full">
            {/* Context pill */}
            <section className="py-space-md flex flex-wrap items-center justify-between gap-space-md">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container-high shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">Currently Viewing:</span>
                <span className="font-label-md text-label-md text-on-surface">Class 12-A • Mathematics</span>
                <Icon name="tune" size={16} className="text-on-surface-variant" />
              </div>
              <div className="flex items-center gap-space-sm text-on-surface-variant">
                <Icon name="calendar_today" size={18} />
                <span className="font-code-sm text-code-sm">Evaluation Cycle: 2024-25 • Term II Mid-Term</span>
              </div>
            </section>

            {/* Title */}
            <header className="pb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div>
                <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                  Class Performance &amp; Academic Analytics
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-3xl">
                  Track section benchmarks, identify students needing remediation, and evaluate score distributions in real time.
                </p>
              </div>
              <div className="flex items-center gap-space-sm flex-shrink-0">
                <button
                  onClick={() => window.print()}
                  className="h-10 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-2"
                >
                  <Icon name="print" size={18} />
                  Print Sheet
                </button>
                <button className="h-10 px-4 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                  <Icon name="verified" size={18} />
                  Certify Section Marks
                </button>
              </div>
            </header>

            <FilterBar
              draft={draft}
              onDraftChange={(patch) => setDraft((d) => ({ ...d, ...patch }))}
              onApply={handleApply}
              onReset={handleReset}
            />
            <StatCards stats={stats} />
            <AnalyticsSection />
            <StudentTable
              students={students}
              query={query}
              onQueryChange={setQuery}
              noData={noData}
              onView={setSelected}
              onReset={handleReset}
              onDismissEmpty={() => {
                setQuery("");
                if (noData) setApplied((a) => ({ ...a, cls: "12-A" })), setDraft((d) => ({ ...d, cls: "12-A" }));
              }}
            />
          </div>
        </main>
      </div>
      <AnswerSheetModal student={selected} onClose={() => setSelected(null)} />
    </>
  );
}
