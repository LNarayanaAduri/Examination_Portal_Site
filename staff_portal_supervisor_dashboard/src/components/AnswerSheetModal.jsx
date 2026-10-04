import { useEffect } from "react";
import Icon from "./Icon.jsx";
import { SAMPLE_QUESTIONS } from "../data.js";

export default function AnswerSheetModal({ student, onClose }) {
  useEffect(() => {
    if (!student) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [student, onClose]);

  if (!student) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-space-lg bg-surface-container-low flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">
              <Icon name="assignment" />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{student.name}</h3>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                Roll: {student.roll} • Class 12-A (PCMB)
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="p-space-lg overflow-y-auto flex flex-col gap-space-md">
          <div className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Subject &amp; Examination</span>
              <div className="font-label-md text-label-md text-on-surface">Mathematics &amp; Calculus (MATH-102) • Mid-Term Oct 2024</div>
            </div>
            <div className="text-right">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Awarded Mark</span>
              <div className="font-timer-display text-headline-md text-secondary">{student.score} / 100</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wide text-xs">
              Section A: Multiple Choice Questions
            </h4>
            {SAMPLE_QUESTIONS.map((item) => (
              <div
                key={item.q}
                className="p-3 rounded-lg bg-surface-container-lowest shadow-sm flex items-start justify-between"
              >
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">{item.q}</span>
                  <span className={`font-body-sm text-body-sm mt-1 ${item.ok ? "text-secondary" : "text-error"}`}>{item.a}</span>
                </div>
                <span className={`font-code-sm text-code-sm font-bold ${item.ok ? "text-secondary" : "text-error"}`}>
                  {item.marks}
                </span>
              </div>
            ))}
          </div>

          <div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm text-on-surface font-semibold">
              Faculty Invigilator / Evaluator Remarks
            </label>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Good geometric understanding. Practice algebraic bounds simplification during integration by parts to prevent arithmetic losses.
            </p>
          </div>
        </div>

        <div className="p-space-md bg-surface-container-low flex items-center justify-end gap-space-sm">
          <button
            onClick={onClose}
            className="h-10 px-4 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors"
          >
            Close Preview
          </button>
          <button
            onClick={() => alert("Downloading Certified Answer Script PDF...")}
            className="h-10 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-2"
          >
            <Icon name="download" size={18} />
            Download Digital Script
          </button>
        </div>
      </div>
    </div>
  );
}
