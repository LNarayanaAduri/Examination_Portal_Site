import { useState } from "react";
import { SupSidebar, SupHeader, Ticker } from "./Chrome.jsx";
import UploadSection from "./UploadSection.jsx";
import PapersRepository from "./PapersRepository.jsx";
import ResultsLedger from "./ResultsLedger.jsx";
import AccessControl from "./AccessControl.jsx";
import { INITIAL_PAPERS, INITIAL_QUESTIONS } from "./data.js";

export default function SupervisorApp() {
  const [active, setActive] = useState("dashboard");
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [papers, setPapers] = useState(INITIAL_PAPERS);
  // Starts on CHEM-301 so the confirmation banner is visible, matching the design
  const [pendingDelete, setPendingDelete] = useState(INITIAL_PAPERS[2]);

  const navigate = (item) => {
    setActive(item.id);
    if (item.target === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const addQuestion = (q) => setQuestions((list) => [...list, { ...q, id: Date.now() }]);
  const removeQuestion = (id) => setQuestions((list) => list.filter((q) => q.id !== id));
  const addPaper = (p) => setPapers((list) => [...list, { ...p, id: Date.now() }]);
  const confirmDelete = () => {
    setPapers((list) => list.filter((p) => p.id !== pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div className="flex min-h-screen w-full bg-background text-on-surface">
      <SupSidebar active={active} onNavigate={navigate} />
      <div className="flex-1 flex flex-col min-w-0">
        <SupHeader />
        <Ticker />
        <main className="p-8 max-w-7xl w-full mx-auto space-y-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-display-lg font-headline-lg text-on-surface">Supervisor Examination Workspace</h1>
            <p className="text-outline text-body-md">
              Manage question paper repositories, author assessments, review printable scores, and configure faculty permissions.
            </p>
          </div>

          <UploadSection
            questions={questions}
            onAddQuestion={addQuestion}
            onRemoveQuestion={removeQuestion}
            onPaperUploaded={addPaper}
          />
          <PapersRepository
            papers={papers}
            pendingDelete={pendingDelete}
            onRequestDelete={setPendingDelete}
            onCancelDelete={() => setPendingDelete(null)}
            onConfirmDelete={confirmDelete}
          />
          <ResultsLedger />
          <AccessControl />
        </main>
        <footer className="mt-auto px-8 py-6 border-t border-outline-variant text-center text-xs text-outline bg-surface-container-lowest">
          <p>
            Vikas Junior College Examination Portal • Supervisor Terminal • Regulated under State Higher Secondary Education Board
            guidelines
          </p>
        </footer>
      </div>
    </div>
  );
}
