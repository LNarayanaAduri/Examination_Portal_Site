import { useRef, useState } from "react";
import Icon from "../components/Icon.jsx";
import { CLASS_STANDARDS, SUBJECTS } from "./data.js";

const MAX_BYTES = 25 * 1024 * 1024;
const OK_EXT = /\.(pdf|docx)$/i;

function MethodHeader({ mode, onMode }) {
  const base = "px-3.5 py-1.5 rounded-md text-xs flex items-center gap-1.5 transition-colors";
  const on = "font-semibold bg-surface-container-lowest text-on-surface shadow-sm";
  const off = "font-medium text-outline hover:text-on-surface";
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-outline-variant gap-4">
      <div>
        <h2 className="text-headline-md font-bold text-on-surface">Upload Question Paper</h2>
        <p className="text-xs text-outline">Prepare verified question packages for the upcoming term terminal examinations.</p>
      </div>
      <div className="inline-flex p-1 bg-surface-container-low rounded-lg border border-outline-variant">
        <button onClick={() => onMode("file")} className={`${base} ${mode === "file" ? on : off}`}>
          <Icon name="cloud_upload" size={16} />
          <span>File Drag-and-Drop{mode === "file" ? " (Active)" : ""}</span>
        </button>
        <button onClick={() => onMode("builder")} className={`${base} ${mode === "builder" ? on : off}`}>
          <Icon name="edit_document" size={16} />
          <span>Manual Question Builder{mode === "builder" ? " (Active)" : ""}</span>
        </button>
      </div>
    </div>
  );
}

const inputCls =
  "w-full bg-surface-container-lowest border border-outline-variant rounded-lg text-xs py-2 px-3 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none text-on-surface";

function FileImport({ dim, onUploaded }) {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    subject: SUBJECTS[0].code,
    standard: CLASS_STANDARDS[0],
    date: "2024-11-04",
    marks: "100",
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const accept = (f) => {
    if (!f) return;
    if (!OK_EXT.test(f.name)) return setError("Only .PDF or .DOCX files are supported.");
    if (f.size > MAX_BYTES) return setError("File exceeds the 25MB limit.");
    setError("");
    setFile(f);
  };

  const formatSize = (b) => (b > 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`);

  const submit = () => {
    if (!file) return setError("Choose a question paper file first.");
    const subj = SUBJECTS.find((s) => s.code === form.subject);
    const d = new Date(form.date);
    onUploaded({
      subject: subj.name,
      code: subj.code,
      examDate: d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      fileType: "pdf",
      fileLabel: `${/\.pdf$/i.test(file.name) ? "PDF" : "DOCX"} (${formatSize(file.size)})`,
      uploadDate: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      status: "pending",
    });
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div
      className={`lg:col-span-6 flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-outline-variant pb-6 lg:pb-0 lg:pr-8 transition-opacity ${
        dim ? "opacity-60" : ""
      }`}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-outline">Method 1: Direct File Import</span>

      <div
        onClick={() => fileRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          accept(e.dataTransfer.files?.[0]);
        }}
        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors cursor-pointer group ${
          dragging ? "border-primary bg-surface-container-low" : "border-outline-variant bg-surface-container-low/50 hover:bg-surface-container-low"
        }`}
      >
        <input ref={fileRef} type="file" accept=".pdf,.docx" className="hidden" onChange={(e) => accept(e.target.files?.[0])} />
        <div className="size-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-3">
          <Icon name={file ? "task" : "upload_file"} size={24} />
        </div>
        {file ? (
          <>
            <p className="text-sm font-semibold text-on-surface mb-1 break-all">{file.name}</p>
            <p className="text-xs text-outline mb-4">{formatSize(file.size)} • ready to verify</p>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold text-on-surface mb-1">Drag and drop PDF or DOCX question paper here</p>
            <p className="text-xs text-outline mb-4">Supported formats: Encrypted .PDF, Microsoft Word (.DOCX) up to 25MB</p>
          </>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileRef.current?.click();
          }}
          className="px-4 py-2 border border-outline-variant bg-surface-container-lowest text-xs font-semibold rounded-lg hover:border-primary text-on-surface"
        >
          {file ? "Choose Different File" : "Browse Computer"}
        </button>
      </div>
      {error && <p className="text-xs text-error -mt-2">{error}</p>}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-on-surface mb-1.5">Exam Subject</label>
          <select className={inputCls} value={form.subject} onChange={set("subject")}>
            {SUBJECTS.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name} ({s.code})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-on-surface mb-1.5">Class / Standard</label>
          <select className={inputCls} value={form.standard} onChange={set("standard")}>
            {CLASS_STANDARDS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-on-surface mb-1.5">Examination Date</label>
          <input className={inputCls} type="date" value={form.date} onChange={set("date")} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-on-surface mb-1.5">Maximum Marks</label>
          <input className={inputCls} type="number" value={form.marks} onChange={set("marks")} />
        </div>
      </div>

      <button
        onClick={submit}
        className="w-full mt-2 py-2.5 px-4 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-sm"
      >
        <Icon name="task_alt" size={16} />
        <span>Upload &amp; Verify Paper</span>
      </button>
    </div>
  );
}

const OPTION_KEYS = ["A", "B", "C", "D"];

function QuestionBuilder({ dim, questions, onAdd, onRemove }) {
  const [prompt, setPrompt] = useState("Find the derivative of f(x) = sin²(x) with respect to x.");
  const [options, setOptions] = useState({ A: "2 sin(x) cos(x)", B: "cos²(x)", C: "2 cos(x)", D: "-2 sin(x) cos(x)" });
  const [correctOpt, setCorrectOpt] = useState("A");
  const [correct, setCorrect] = useState("+4.0");
  const [negative, setNegative] = useState("-1.0");

  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

  const add = () => {
    const text = prompt.trim();
    if (!text) return;
    const marks = Math.abs(parseFloat(correct)) || 0;
    onAdd({ title: text.length > 44 ? `${text.slice(0, 44)}...` : text, marks });
    setPrompt("");
  };

  return (
    <div className={`lg:col-span-6 flex flex-col gap-4 transition-opacity ${dim ? "opacity-60" : ""}`}>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-outline">Method 2: Question Authoring</span>
          <h3 className="font-headline-sm text-sm font-bold text-on-surface">Quick Question Builder (MCQ)</h3>
        </div>
        <span className="text-xs px-2 py-0.5 bg-surface-container text-on-surface font-code-sm rounded">MATH-201 Section A</span>
      </div>

      <div className="space-y-3 bg-surface-container-low/40 p-4 rounded-xl border border-outline-variant">
        <div>
          <label className="block text-xs font-medium text-outline mb-1">Question Prompt</label>
          <textarea
            rows={2}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Find the derivative of f(x) = sin^2(x) with respect to x..."
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg text-xs p-2 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none font-code-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {OPTION_KEYS.map((k) => (
            <div key={k} className="flex items-center gap-2 bg-surface-container-lowest p-2 border border-outline-variant rounded-lg">
              <input
                type="radio"
                name="correct_opt"
                checked={correctOpt === k}
                onChange={() => setCorrectOpt(k)}
                className="accent-secondary"
              />
              <span className="font-bold text-outline">{k}:</span>
              <input
                type="text"
                value={options[k]}
                onChange={(e) => setOptions((o) => ({ ...o, [k]: e.target.value }))}
                className="w-full border-none p-0 text-xs font-code-sm focus:ring-0 focus:outline-none bg-transparent"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-medium text-outline">Correct:</label>
            <input
              type="text"
              value={correct}
              onChange={(e) => setCorrect(e.target.value)}
              className="w-14 bg-surface-container-lowest border border-outline-variant rounded text-xs py-1 px-1.5 text-center font-code-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-medium text-outline">Negative:</label>
            <input
              type="text"
              value={negative}
              onChange={(e) => setNegative(e.target.value)}
              className="w-14 bg-surface-container-lowest border border-outline-variant rounded text-xs py-1 px-1.5 text-center font-code-sm"
            />
          </div>
          <button
            onClick={add}
            className="ml-auto py-1.5 px-3 bg-secondary text-on-secondary rounded-lg text-xs font-semibold hover:opacity-90 flex items-center gap-1"
          >
            <Icon name="add_circle" size={16} />
            <span>Add Question</span>
          </button>
        </div>
      </div>

      <div className="mt-1">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-on-surface">
            Queue Preview ({questions.length} Question{questions.length === 1 ? "" : "s"} Added)
          </span>
          <span className="text-outline">Total Weight: {totalMarks.toFixed(1)} Marks</span>
        </div>
        <div className="space-y-2">
          {questions.length === 0 && (
            <p className="text-xs text-outline p-2.5 border border-dashed border-outline-variant rounded-lg text-center">
              No questions in the queue yet.
            </p>
          )}
          {questions.map((q, i) => (
            <div
              key={q.id}
              className="flex items-center justify-between p-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-xs"
            >
              <div className="flex items-center gap-2 truncate">
                <span className="font-bold text-outline">Q{i + 1}.</span>
                <span className="truncate text-on-surface font-medium">{q.title}</span>
                <span className="px-1.5 py-0.5 bg-surface-container text-[10px] rounded font-semibold text-secondary">MCQ</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="text-outline hover:text-on-surface p-1" title="Edit">
                  <Icon name="edit" size={18} />
                </button>
                <button onClick={() => onRemove(q.id)} className="text-outline hover:text-error p-1" title="Remove">
                  <Icon name="delete" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function UploadSection({ questions, onAddQuestion, onRemoveQuestion, onPaperUploaded }) {
  const [mode, setMode] = useState("file");
  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
      <MethodHeader mode={mode} onMode={setMode} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        <FileImport dim={mode !== "file"} onUploaded={onPaperUploaded} />
        <QuestionBuilder dim={mode !== "builder"} questions={questions} onAdd={onAddQuestion} onRemove={onRemoveQuestion} />
      </div>
    </section>
  );
}
