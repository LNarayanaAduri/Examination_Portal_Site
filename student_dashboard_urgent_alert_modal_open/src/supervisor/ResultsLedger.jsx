import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { EXAM_OPTIONS, RESULTS, SECTION_OPTIONS } from "./data.js";

const selectCls =
  "bg-surface-container-low border border-outline-variant rounded-lg text-xs py-1.5 px-3 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none";

export default function ResultsLedger() {
  const [exam, setExam] = useState(EXAM_OPTIONS[0]);
  const [section, setSection] = useState(SECTION_OPTIONS[0]);

  // Only Mathematics II / Class 12 - Sec A has published scores in this demo
  const rows = exam === EXAM_OPTIONS[0] && section === SECTION_OPTIONS[0] ? RESULTS : [];

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm" id="results-ledger">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 gap-4 border-b border-outline-variant">
        <div>
          <h2 className="text-headline-md font-bold text-on-surface">Student Results &amp; Printable Ledger</h2>
          <p className="text-xs text-outline">Consolidated examination scores, verified rankings, and printable marksheets.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-xs text-outline font-medium">Filter Exam:</label>
            <select className={selectCls} value={exam} onChange={(e) => setExam(e.target.value)}>
              {EXAM_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-outline font-medium">Section:</label>
            <select className={selectCls} value={section} onChange={(e) => setSection(e.target.value)}>
              {SECTION_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-4 py-2 bg-surface-container-highest hover:bg-surface-container text-on-surface border border-outline-variant rounded-lg text-xs font-bold transition-colors"
          >
            <Icon name="print" size={16} />
            <span>Print Results Ledger</span>
          </button>
        </div>
      </div>

      {rows.length > 0 ? (
        <div className="mt-6 overflow-x-auto border border-outline-variant rounded-lg">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-container-low border-b border-outline-variant text-outline uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Candidate Roll</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Total Score</th>
                <th className="py-3 px-4">Percentile</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant font-medium text-on-surface">
              {rows.map((r) => (
                <tr key={r.roll}>
                  <td className="py-3 px-4 font-code-sm font-bold">{r.roll}</td>
                  <td className="py-3 px-4">{r.name}</td>
                  <td className="py-3 px-4">{r.subject}</td>
                  <td className={`py-3 px-4 font-bold ${r.flagged ? "text-error" : "text-secondary"}`}>{r.score} / 100</td>
                  <td className="py-3 px-4 font-code-sm">{r.percentile}</td>
                  <td className="py-3 px-4 text-outline">{r.date}</td>
                  <td className="py-3 px-4">
                    {r.flagged ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-error font-semibold bg-error-container/40 px-2 py-0.5 rounded">
                        <Icon name="flag" size={14} />
                        Flagged (Recheck)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-secondary font-semibold bg-secondary-fixed/30 px-2 py-0.5 rounded">
                        <Icon name="check_circle" size={14} />
                        Verified
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-6 p-6 border border-dashed border-outline-variant rounded-xl bg-surface-container-low/40 flex flex-col items-center justify-center text-center">
          <div className="size-10 rounded-full bg-surface-container flex items-center justify-center text-outline mb-2">
            <Icon name="filter_list_off" size={24} />
          </div>
          <p className="text-xs font-semibold text-on-surface">No results available for this filter</p>
          <p className="text-xs text-outline mt-0.5">
            Try adjusting the subject, examination date, or class section to inspect scores.
          </p>
        </div>
      )}
    </section>
  );
}
