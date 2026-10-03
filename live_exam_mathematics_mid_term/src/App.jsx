import { useEffect, useState } from "react";

const initialSeconds = 49 * 60 + 33;

const messages = [
  {
    label: "ADVISORY",
    color: "amber",
    content: (
      <>
        <strong className="text-white">Question #4 Clarification:</strong> Limit
        approaches 1 from both sides (two-sided limit).
      </>
    ),
  },
  {
    label: "SYSTEM NOTICE",
    color: "emerald",
    content: "Active LAN session synced with proctor room.",
  },
  {
    label: "INTEGRITY",
    color: "rose",
    content:
      "Tab switching or window resizing triggers automated proctor flag.",
  },
  {
    label: "SUPPORT",
    color: "cyan",
    content:
      "Physical rough work sheets available on candidate desk upon request.",
  },
];

const options = [
  { key: "A", label: "1" },
  { key: "B", label: "3" },
  { key: "C", label: "0" },
  { key: "D", label: "Does not exist (DNE)" },
];

const questionStatus = {
  1: "answered",
  2: "answered",
  3: "answered",
  5: "marked",
  12: "marked",
  30: "not-visited",
};

const broadcastBadgeClasses = {
  amber:
    "border-amber-500/40 bg-amber-500/20 text-amber-300",
  emerald:
    "border-emerald-500/40 bg-emerald-500/20 text-emerald-300",
  rose: "border-rose-500/40 bg-rose-500/20 text-rose-300",
  cyan: "border-cyan-500/40 bg-cyan-500/20 text-cyan-300",
};

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [hours, minutes, remainingSeconds]
    .map((part) => String(part).padStart(2, "0"))
    .join(":");
}

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}

function Modal({ title, onClose, children, className = "" }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-label={title}
        aria-modal="true"
        className={`relative w-full rounded-2xl bg-surface-container-lowest p-6 shadow-2xl sm:p-8 ${className}`}
        role="dialog"
      >
        {children}
      </section>
    </div>
  );
}

function Broadcast() {
  const repeatedMessages = [...messages, ...messages];

  return (
    <div className="proctor-marquee-container z-40 w-full select-none overflow-hidden border-b border-subtle bg-[#131b2e] text-white shadow-sm">
      <div className="flex h-10 items-center">
        <div className="z-10 flex h-full shrink-0 items-center gap-2 bg-[#ba1a1a] px-3.5 font-label-sm text-label-sm font-bold uppercase tracking-wide text-white shadow-md">
          <Icon className="animate-pulse text-[16px]">campaign</Icon>
          <span className="whitespace-nowrap">Proctor Broadcast</span>
        </div>
        <div className="relative flex h-full flex-1 cursor-default items-center overflow-hidden bg-[#131b2e]">
          <div className="animate-proctor-marquee flex items-center py-1 text-[13px] font-medium tracking-wide text-slate-200">
            {repeatedMessages.map((message, index) => (
              <span className="inline-flex items-center" key={`${message.label}-${index}`}>
                <span className="inline-flex items-center gap-2 px-6">
                  <span
                    className={`rounded border px-1.5 py-0.5 font-code-sm text-[11px] font-semibold ${broadcastBadgeClasses[message.color]}`}
                  >
                    {message.label}
                  </span>
                  {message.content}
                </span>
                {index < repeatedMessages.length - 1 && (
                  <span className="text-slate-500">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden shrink-0 items-center gap-1.5 border-l border-slate-700/60 bg-[#131b2e] px-3 font-code-sm text-[11px] text-slate-400 md:flex">
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
          <span className="uppercase tracking-wider">Live Ticker</span>
        </div>
      </div>
    </div>
  );
}

function Header({ onSubmit }) {
  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="flex h-16 w-full items-center justify-between gap-space-md px-margin">
          <div className="flex items-center gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Vikas Examination Portal"
                className="h-9 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VPJyDCWKdMLBOfODwAIVgJJtPC7yxk_B7kWDYOIpj3cGskPzczlOkPlM7T5mJa-Mam36t4Zk1-h4iE-DRtxyQ-FtFKyzruwVPmVUxljEdu-jTEDO0ZjzFKeLT0cqyPpkd3FCCurcF1RR9vmAHUqoRxh3Hp_dGjeFC9XjgJIjG981HizLxIjqAgz__OSqKtuqM691zNtt4gEMGtM1SLPZqos1wr2Y8LALcY_I1jsrXiF5gdjO43xvqjbx0"
              />
            </div>
            <nav className="hidden items-center gap-space-xs lg:flex" aria-label="Main navigation">
              {["Dashboard", "Past Results", "Exam Schedule", "Profile", "Help & Support"].map(
                (item) => (
                  <a
                    aria-current={item === "Exam Schedule" ? "page" : undefined}
                    className={
                      item === "Exam Schedule"
                        ? "rounded-md bg-on-surface px-4 py-2 font-label-md text-label-md font-semibold text-surface"
                        : "rounded-lg px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
                    }
                    href="#"
                    key={item}
                  >
                    {item}
                  </a>
                ),
              )}
            </nav>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Aarav Sharma"
                className="h-8 w-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UAkPhjS94qWS4ogDi51ibAgwP98o2WU3a51ZZEy3wHFAUB5ksqVngGxf6Vrw7DtCqAwGnNPxjrXlg_w-Le71INfhkA8PKx14AFWs7GVOI9532MxsoiYwh-Zg6tXpENY11VYECunGEHMtxxsXpi-qGz8xopWUiIISVVCJGMqIzKh7_5_KBirQdpXzb9y6oT3WwTfWkMpEsmJi1-stX9_LOZ7KCDqnelE4wwSgq59BBR-w6VZDBKxBYiXQ"
              />
              <div className="hidden flex-col text-left md:flex">
                <span className="font-label-sm text-label-sm font-semibold leading-tight text-on-surface">
                  Aarav Sharma
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">
                  Roll: 24JC-1082
                </span>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-surface-container-high sm:block" />
            <a
              className="flex items-center gap-space-xs rounded-lg px-space-sm py-space-xs font-label-sm text-label-sm font-semibold text-secondary transition-colors hover:text-on-secondary-container"
              href="#"
            >
              <Icon className="text-[18px]">logout</Icon>
              <span className="hidden sm:inline">Logout</span>
            </a>
          </div>
        </div>
      </header>
      <div className="min-h-[calc(100vh-4rem)] w-full bg-surface pt-16">
        <Broadcast />
        <section className="sticky top-16 z-40 w-full bg-surface-container-lowest shadow-sm">
          <div className="mx-auto flex max-w-[1720px] flex-wrap items-center justify-between gap-space-md px-margin py-3">
            <div className="flex min-w-0 items-center gap-space-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-container text-secondary shadow-sm">
                <Icon className="text-[24px]">calculate</Icon>
              </div>
              <div className="flex min-w-0 flex-col">
                <div className="flex items-center gap-space-xs">
                  <h1 className="truncate font-headline-sm text-headline-sm font-semibold text-on-surface">
                    Class 12 Mid-Term Assessment: Mathematics &amp; Calculus
                  </h1>
                  <span className="shrink-0 rounded bg-surface-container px-2 py-0.5 font-code-sm text-code-sm font-medium text-on-surface-variant">
                    MATH-102
                  </span>
                </div>
                <p className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  <span>Aarav Sharma</span>
                  <span className="h-1 w-1 rounded-full bg-outline-variant" />
                  <span className="font-code-sm text-code-sm">Roll: 24JC-1082</span>
                  <span className="h-1 w-1 rounded-full bg-outline-variant" />
                  <span className="font-medium text-secondary">Sec-B (Science Stream)</span>
                </p>
              </div>
            </div>
            <div className="hidden min-w-[260px] flex-col items-center justify-center xl:flex">
              <div className="mb-1 flex w-full items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Question Progress
                </span>
                <span className="font-code-sm text-code-sm font-semibold text-on-surface">
                  04 <span className="text-outline">/ 30</span> (13%)
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
                <div className="h-full rounded-full bg-secondary" style={{ width: "13.33%" }} />
              </div>
            </div>
            <button
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-label-md text-label-md text-on-secondary shadow-sm transition-all hover:bg-on-secondary-container"
              onClick={onSubmit}
              type="button"
            >
              <Icon className="text-[18px]">verified</Icon>
              <span className="whitespace-nowrap">Finish &amp; Submit</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

function QuestionCard({ selectedAnswer, onAnswerChange }) {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-xl bg-surface-container-lowest p-6 shadow-sm sm:p-8">
      <div className="pointer-events-none absolute -right-8 -top-8 select-none text-surface-container opacity-40">
        <span className="font-headline-lg text-[130px] font-bold">∫dx</span>
      </div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant pb-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-container font-headline-sm text-headline-sm font-bold text-on-primary">
            4
          </span>
          <span className="rounded-full bg-surface-container px-3 py-1 font-label-md text-label-md font-medium text-on-surface-variant">
            Multiple Choice (Single Correct)
          </span>
          <span className="rounded bg-surface-container-high px-2 py-0.5 font-code-sm text-code-sm text-on-primary-fixed-variant">
            Section 1: Differential Calculus
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-surface-container px-3 py-1">
          <span className="flex items-center gap-1 font-label-sm text-label-sm font-semibold text-secondary">
            <Icon className="text-[16px]">add_circle</Icon> +4.0
          </span>
          <span className="text-label-sm text-outline">/</span>
          <span className="flex items-center gap-1 font-label-sm text-label-sm font-semibold text-error">
            <Icon className="text-[16px]">remove_circle</Icon> -1.0
          </span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 font-body-lg text-body-lg font-normal leading-relaxed text-on-surface">
          Let the real-valued function{" "}
          <span className="rounded bg-surface-container px-1.5 py-0.5 font-code-sm font-semibold">
            f(x)
          </span>{" "}
          be defined on ℝ \ {"{1}"} by the rational expression:
        </h2>
        <div className="my-5 flex flex-col items-center justify-center rounded-lg bg-surface-container-low p-5 text-center">
          <div className="font-code-sm text-base font-semibold tracking-wide text-on-surface">
            f(x) ={" "}
            <span className="mx-1 inline-block align-middle">
              <span className="block pb-1">x³ - 3x + 2</span>
              <span className="block h-[1.5px] w-full bg-outline-variant pt-1" />
              <span className="block pt-1">(x - 1)²</span>
            </span>{" "}
            for all x ≠ 1
          </div>
          <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
            Evaluate the limiting behavior:{" "}
            <span className="font-code-sm font-semibold text-on-surface">
              lim <sub>(x → 1)</sub> f(x)
            </span>
          </p>
        </div>
      </div>

      <fieldset aria-label="Answer options" className="mb-8 flex flex-col gap-3.5">
        <legend className="sr-only">Select one option</legend>
        {options.map((option) => {
          const isSelected = selectedAnswer === option.key;
          return (
            <label
              className={`group relative flex cursor-pointer items-center justify-between rounded-xl p-4 shadow-sm transition-all ${
                isSelected
                  ? "bg-secondary-container/30"
                  : "bg-surface-container-lowest hover:bg-surface-container-low"
              }`}
              key={option.key}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-label-md text-label-md font-semibold transition-colors ${
                    isSelected
                      ? "bg-secondary text-on-secondary"
                      : "bg-surface-container text-on-surface"
                  }`}
                >
                  {option.key}
                </span>
                <div className="flex flex-col">
                  <span
                    className={`font-body-md text-body-md ${
                      isSelected
                        ? "font-semibold text-on-surface"
                        : "text-on-surface"
                    }`}
                  >
                    {option.label}
                  </span>
                  {isSelected && (
                    <span className="font-label-sm text-label-sm text-on-secondary-container">
                      Candidate selected option
                    </span>
                  )}
                </div>
              </div>
              {isSelected && (
                <Icon className="text-[22px] text-secondary">check_circle</Icon>
              )}
              <input
                checked={isSelected}
                className={isSelected ? "sr-only" : "h-4 w-4 accent-secondary"}
                name="math_q4"
                onChange={() => onAnswerChange(option.key)}
                type="radio"
                value={option.key}
              />
            </label>
          );
        })}
      </fieldset>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant pt-6">
        <div className="flex items-center gap-3">
          <button
            className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3.5 py-2 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            onClick={() => onAnswerChange("")}
            type="button"
          >
            <Icon className="text-[18px]">ink_eraser</Icon>
            <span>Clear Response</span>
          </button>
          <button
            className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-surface-container-high px-3.5 py-2 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-highest"
            type="button"
          >
            <Icon className="text-[18px] text-[#7C3AED]">bookmark</Icon>
            <span>Mark for Review &amp; Next</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex cursor-pointer items-center gap-1 rounded-lg bg-surface-container px-4 py-2 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high"
            type="button"
          >
            <Icon className="text-[18px]">arrow_back</Icon>
            <span>Previous</span>
          </button>
          <button
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-5 py-2 font-label-md text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container"
            type="button"
          >
            <span>Save &amp; Next Question</span>
            <Icon className="text-[18px]">arrow_forward</Icon>
          </button>
        </div>
      </div>
    </div>
  );
}

function TimerCard({ secondsRemaining }) {
  const warning = secondsRemaining < 600;

  return (
    <div className="relative flex flex-col gap-3.5 overflow-hidden rounded-xl border-subtle bg-surface-container-lowest p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="text-[18px] text-secondary">schedule</Icon>
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
            Time Remaining
          </span>
        </div>
        <div
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-label-sm text-label-sm font-medium ${
            warning
              ? "border border-error bg-error-container text-on-error-container"
              : "bg-secondary-container/30 text-secondary"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              warning ? "bg-error" : "animate-pulse bg-secondary"
            }`}
          />
          {warning ? "Time Low" : "Normal Pace"}
        </div>
      </div>
      <div className="flex items-baseline justify-between pt-1">
        <div className="flex items-baseline gap-2">
          <span className="font-timer-display text-[32px] font-bold leading-tight tracking-tight text-on-surface">
            {formatTime(secondsRemaining)}
          </span>
          <span className="font-code-sm text-code-sm font-medium text-on-surface-variant">
            / 01:30:00
          </span>
        </div>
        <span className="rounded bg-surface-container px-2 py-0.5 font-label-sm text-label-sm font-medium text-on-surface-variant">
          MATH-102
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            warning ? "bg-error" : "bg-secondary"
          }`}
          style={{ width: "82.2%" }}
        />
      </div>
      <div className="flex items-center justify-between pt-0.5 text-on-surface-variant">
        <div className="flex items-center gap-1.5">
          <Icon className="text-[16px] text-secondary">lock_clock</Icon>
          <span className="font-body-sm text-body-sm">Auto-submits when 00:00:00</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          <span className="font-code-sm text-code-sm font-medium text-secondary">
            Online &amp; Syncing
          </span>
        </div>
      </div>
    </div>
  );
}

function QuestionPalette() {
  return (
    <div className="flex flex-col rounded-xl bg-surface-container-lowest p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-outline-variant pb-4">
        <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
          Question Palette
        </h3>
        <span className="rounded-full bg-surface-container px-2.5 py-0.5 font-code-sm text-code-sm font-medium text-on-surface">
          30 Total
        </span>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-2.5 rounded-lg bg-surface-container-low p-3">
        <StatusLegend color="bg-secondary" label="Answered:" count="3" />
        <StatusLegend
          color="bg-surface-container-high"
          label="Unanswered:"
          count="24"
        />
        <StatusLegend color="bg-[#D97706]" label="Marked:" count="2" />
        <StatusLegend
          color="bg-surface-container-lowest shadow-sm"
          label="Not Visited:"
          count="1"
        />
      </div>
      <div className="mb-5 flex items-center gap-1.5 rounded-lg bg-surface-container p-1 font-label-sm text-label-sm">
        <button
          className="flex-1 rounded-md bg-surface-container-lowest px-2 py-1 text-center font-semibold text-on-surface shadow-sm"
          type="button"
        >
          All (30)
        </button>
        <button
          className="flex-1 rounded-md px-2 py-1 text-center text-on-surface-variant hover:text-on-surface"
          type="button"
        >
          Answered (3)
        </button>
        <button
          className="flex-1 rounded-md px-2 py-1 text-center text-on-surface-variant hover:text-on-surface"
          type="button"
        >
          Marked (2)
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2.5">
        {Array.from({ length: 30 }, (_, index) => index + 1).map((number) => (
          <QuestionButton key={number} number={number} />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between rounded-xl bg-surface-container-low p-3.5">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Estimated Score
          </span>
          <span className="font-code-sm text-code-sm font-bold text-secondary">
            +12.0 Possible
          </span>
        </div>
        <div className="h-7 w-px bg-surface-container-high" />
        <div className="flex flex-col text-right">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Negative Margin
          </span>
          <span className="font-code-sm text-code-sm font-bold text-error">
            0.0 (Clean)
          </span>
        </div>
      </div>
    </div>
  );
}

function StatusLegend({ color, label, count }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3.5 w-3.5 shrink-0 rounded ${color}`} />
      <span className="font-body-sm text-body-sm text-on-surface">
        {label} <strong className="font-code-sm">{count}</strong>
      </span>
    </div>
  );
}

function QuestionButton({ number }) {
  const status = questionStatus[number] ?? "unanswered";
  const classes = {
    answered:
      "bg-secondary text-on-secondary font-semibold transition-transform hover:scale-105 shadow-sm",
    current:
      "bg-primary-container text-on-primary font-bold shadow-md scale-105",
    marked:
      "bg-[#D97706] text-on-primary font-semibold transition-transform hover:scale-105 shadow-sm",
    unanswered:
      "bg-surface-container text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors",
    "not-visited":
      "bg-surface-container-lowest text-outline font-medium hover:bg-surface-container transition-colors shadow-sm",
  };
  const currentStatus = number === 4 ? "current" : status;
  const title =
    currentStatus === "current"
      ? `Question ${number} (Current Question)`
      : `Question ${number} (${currentStatus.replace("-", " ")})`;

  return (
    <button
      aria-current={currentStatus === "current" ? "step" : undefined}
      className={`relative flex h-10 items-center justify-center rounded-lg font-timer-display text-sm ${classes[currentStatus]}`}
      title={title}
      type="button"
    >
      {number}
      {number === 5 && (
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-error" />
      )}
    </button>
  );
}

function UtilityCard({ onOpenFormula }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-surface-container-lowest p-4 shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container text-secondary">
          <Icon className="text-[20px]">functions</Icon>
        </div>
        <div>
          <span className="block font-label-md text-label-md leading-tight text-on-surface">
            Calculus Reference
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Formulas &amp; Constants
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded-lg bg-surface-container p-2 text-on-surface transition-colors hover:bg-surface-container-high"
          onClick={() =>
            window.alert(
              "Built-in Scientific Calculator overlay active. Candidate workspace initialized.",
            )
          }
          title="Launch Scientific Calculator"
          type="button"
        >
          <Icon className="text-[20px]">calculate</Icon>
        </button>
        <button
          className="rounded-lg bg-surface-container p-2 text-on-surface transition-colors hover:bg-surface-container-high"
          onClick={onOpenFormula}
          title="Open Formula Reference Sheet"
          type="button"
        >
          <Icon className="text-[20px]">menu_book</Icon>
        </button>
      </div>
    </div>
  );
}

function IntegrityNotice() {
  return (
    <div className="flex w-full items-start gap-3 rounded-xl bg-surface-container-low p-4 text-on-surface-variant shadow-sm">
      <Icon className="mt-0.5 shrink-0 text-[22px] text-secondary">verified_user</Icon>
      <div className="flex-1 text-left">
        <span className="mb-0.5 block font-label-sm text-label-sm font-semibold text-on-surface">
          Automated Integrity &amp; Proctor Engine Active
        </span>
        <p className="font-body-sm text-body-sm leading-relaxed">
          Window resizing, tab toggling, or secondary display events are actively
          monitored. Any unauthorized event will be logged and instantly flagged
          to Proctor ID:{" "}
          <span className="font-code-sm font-medium text-on-surface">VKS-PROC-88</span>.
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-surface-container-lowest px-2.5 py-1 font-code-sm text-code-sm font-medium text-secondary shadow-sm">
        <span className="h-2 w-2 animate-ping rounded-full bg-secondary" />
        <span>Feed Synchronized</span>
      </div>
    </div>
  );
}

function SubmitDialog({ secondsRemaining, onClose }) {
  return (
    <Modal
      className="max-w-lg"
      onClose={onClose}
      title="Submit Examination?"
    >
      <div className="mb-4 flex items-center gap-3 text-secondary">
        <Icon className="text-[32px]">task_alt</Icon>
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
          Submit Examination?
        </h2>
      </div>
      <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
        You are about to finalize and submit{" "}
        <strong className="text-on-surface">
          MATH-102: Class 12 Mid-Term Assessment
        </strong>
        . Once confirmed, your responses will be encrypted and submitted for
        automated evaluation.
      </p>
      <div className="mb-6 rounded-xl bg-surface-container-low p-4">
        <div className="grid grid-cols-2 gap-y-3 font-body-sm text-body-sm">
          <span className="text-on-surface-variant">Total Questions:</span>
          <span className="text-right font-code-sm font-semibold text-on-surface">30</span>
          <span className="font-medium text-secondary">Answered:</span>
          <span className="text-right font-code-sm font-bold text-secondary">3</span>
          <span className="text-on-surface-variant">Marked for Review:</span>
          <span className="text-right font-code-sm font-semibold text-[#D97706]">2</span>
          <span className="text-on-surface-variant">Unanswered:</span>
          <span className="text-right font-code-sm font-semibold text-error">25</span>
          <span className="text-on-surface-variant">Time Remaining:</span>
          <span className="text-right font-code-sm font-bold text-on-surface">
            {formatTime(secondsRemaining)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <button
          className="cursor-pointer rounded-lg px-4 py-2.5 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container"
          onClick={onClose}
          type="button"
        >
          Return to Exam
        </button>
        <button
          className="cursor-pointer rounded-lg bg-secondary px-6 py-2.5 font-label-md text-label-md font-semibold text-on-secondary shadow-sm transition-all hover:bg-on-secondary-container"
          onClick={() => {
            window.alert(
              "Assessment submitted successfully. Redirecting to evaluation overview.",
            );
            onClose();
          }}
          type="button"
        >
          Confirm &amp; End Test
        </button>
      </div>
    </Modal>
  );
}

function FormulaDialog({ onClose }) {
  return (
    <Modal
      className="max-w-xl p-6"
      onClose={onClose}
      title="Calculus Reference Sheet"
    >
      <div className="mb-4 flex items-center justify-between border-b border-outline-variant pb-4">
        <div className="flex items-center gap-2">
          <Icon className="text-[24px] text-secondary">functions</Icon>
          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Calculus Reference Sheet
          </h2>
        </div>
        <button
          aria-label="Close formula sheet"
          className="rounded-lg p-1 text-on-surface-variant hover:bg-surface-container"
          onClick={onClose}
          type="button"
        >
          <Icon className="text-[20px]">close</Icon>
        </button>
      </div>
      <div className="max-h-[60vh] space-y-4 overflow-y-auto pr-1">
        <div className="rounded-lg bg-surface-container-low p-3">
          <p className="mb-1 font-label-sm text-label-sm font-semibold uppercase text-secondary">
            Standard Limits
          </p>
          <p className="font-code-sm text-code-sm text-on-surface">
            lim (x → a) [xⁿ - aⁿ] / [x - a] = n · aⁿ⁻¹
          </p>
          <p className="mt-1 font-code-sm text-code-sm text-on-surface">
            lim (x → 0) [sin(x) / x] = 1
          </p>
        </div>
        <div className="rounded-lg bg-surface-container-low p-3">
          <p className="mb-1 font-label-sm text-label-sm font-semibold uppercase text-secondary">
            L&apos;Hôpital&apos;s Rule
          </p>
          <p className="font-body-sm leading-normal text-on-surface">
            If lim f(x) = lim g(x) = 0 or ±∞ as x → c, then lim [f(x)/g(x)] = lim
            [f&apos;(x)/g&apos;(x)], provided the latter limit exists.
          </p>
        </div>
        <div className="rounded-lg bg-surface-container-low p-3">
          <p className="mb-1 font-label-sm text-label-sm font-semibold uppercase text-secondary">
            Polynomial Factorization Hint
          </p>
          <p className="font-code-sm text-code-sm text-on-surface">
            x³ - 3x + 2 = (x - 1)² · (x + 2)
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className="rounded-lg bg-surface-container px-4 py-2 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high"
          onClick={onClose}
          type="button"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default function App() {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const [selectedAnswer, setSelectedAnswer] = useState("B");
  const [activeDialog, setActiveDialog] = useState(null);

  useEffect(() => {
    if (secondsRemaining === 0) return undefined;

    const timer = window.setInterval(() => {
      setSecondsRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [secondsRemaining]);

  return (
    <>
      <Header onSubmit={() => setActiveDialog("submit")} />
      <main className="bg-surface">
        <div className="mx-auto grid w-full max-w-[1720px] grid-cols-1 items-start gap-6 px-margin py-6 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-8 xl:col-span-8">
            <QuestionCard
              onAnswerChange={setSelectedAnswer}
              selectedAnswer={selectedAnswer}
            />
            <IntegrityNotice />
          </div>
          <aside className="flex flex-col gap-5 lg:col-span-4 xl:col-span-4">
            <TimerCard secondsRemaining={secondsRemaining} />
            <UtilityCard onOpenFormula={() => setActiveDialog("formula")} />
            <QuestionPalette />
          </aside>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low py-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex w-full flex-col items-center justify-between gap-space-sm px-margin sm:flex-row">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            © 2024 Vikas Junior College Assessment System. All rights reserved.
          </span>
          <div className="flex items-center gap-space-md">
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              System Status: Secure &amp; Verified
            </span>
            <span className="h-2 w-2 rounded-full bg-secondary" />
          </div>
        </div>
      </footer>
      {activeDialog === "submit" && (
        <SubmitDialog
          onClose={() => setActiveDialog(null)}
          secondsRemaining={secondsRemaining}
        />
      )}
      {activeDialog === "formula" && (
        <FormulaDialog onClose={() => setActiveDialog(null)} />
      )}
    </>
  );
}
