import { useMemo, useState } from "react";
import Icon from "../components/Icon.jsx";
import { STATUS_FILTERS, STATUS_META } from "./data.js";

function PaperRow({ p, highlighted, onDelete }) {
  const meta = STATUS_META[p.status];
  const isPdf = p.fileType === "pdf";
  return (
    <tr className={`hover:bg-surface-container-low/40 ${highlighted ? "bg-surface-container-low/20" : ""}`}>
      <td className="py-3 px-4">
        <span className="font-bold block">{p.subject}</span>
        <span className="font-code-sm text-[11px] text-outline">{p.code}</span>
      </td>
      <td className="py-3 px-4">{p.examDate}</td>
      <td className="py-3 px-4">
        <span className="inline-flex items-center gap-1 font-code-sm text-[11px] bg-surface-container px-2 py-0.5 rounded">
          <Icon name={isPdf ? "picture_as_pdf" : "assignment"} size={14} className={isPdf ? "text-error" : "text-primary"} />
          {p.fileLabel}
        </span>
      </td>
      <td className="py-3 px-4 text-outline">{p.uploadDate}</td>
      <td className="py-3 px-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${meta.pill}`}>
          <span className={`size-1.5 rounded-full ${meta.dot}`} />
          {meta.label}
        </span>
      </td>
      <td className="py-3 px-4 text-right">
        <div className="inline-flex items-center gap-2">
          <button className="px-2 py-1 border border-outline-variant rounded text-on-surface hover:bg-surface-container text-xs">Edit</button>
          <button
            onClick={() => onDelete(p)}
            className={
              highlighted
                ? "px-2 py-1 bg-error text-white font-semibold rounded hover:bg-on-error-container text-xs shadow-sm"
                : "px-2 py-1 border border-error-container text-error rounded hover:bg-error-container/20 text-xs"
            }
          >
            Delete
          </button>
          <button className="p-1 text-outline hover:text-on-surface" title="Download">
            <Icon name="download" size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function PapersRepository({ papers, pendingDelete, onRequestDelete, onCancelDelete, onConfirmDelete }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return papers.filter(
      (p) =>
        (status === "all" || p.status === status) &&
        (!q || p.code.toLowerCase().includes(q) || p.subject.toLowerCase().includes(q))
    );
  }, [papers, search, status]);

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm relative" id="question-papers">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-5 gap-4">
        <div>
          <h2 className="text-headline-md font-bold text-on-surface">Question Papers Repository</h2>
          <p className="text-xs text-outline">Active syllabi and scheduled examination papers repository.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Icon name="search" size={18} className="absolute left-2.5 top-2 text-outline" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search subject code..."
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-8 pr-3 py-1.5 text-xs text-on-surface placeholder:text-outline focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-surface-container-low border border-outline-variant rounded-lg text-xs py-1.5 px-3 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
          >
            {STATUS_FILTERS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto border border-outline-variant rounded-lg">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-container-low border-b border-outline-variant text-outline uppercase font-semibold">
            <tr>
              <th className="py-3 px-4">Subject &amp; Paper Code</th>
              <th className="py-3 px-4">Exam Date</th>
              <th className="py-3 px-4">File Type</th>
              <th className="py-3 px-4">Upload Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant font-medium text-on-surface">
            {rows.map((p) => (
              <PaperRow key={p.id} p={p} highlighted={pendingDelete?.id === p.id} onDelete={onRequestDelete} />
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="py-8 px-4 text-center text-outline">
                  No question papers match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pendingDelete && (
        <div className="mt-6 border border-error/30 bg-error-container/20 p-5 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-error text-white rounded-lg">
              <Icon name="warning" size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Delete Question Paper '{pendingDelete.code}'?</p>
              <p className="text-xs text-on-error-container">
                This will permanently delete this question set from the exam terminal servers. Moderation backups will be removed.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
            <button
              onClick={onCancelDelete}
              className="px-4 py-2 border border-outline-variant bg-surface-container-lowest rounded-lg text-xs font-semibold text-on-surface hover:bg-surface-container"
            >
              Cancel
            </button>
            <button
              onClick={onConfirmDelete}
              className="px-4 py-2 bg-error text-on-error rounded-lg text-xs font-bold hover:bg-on-error-container transition-colors shadow-sm"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
