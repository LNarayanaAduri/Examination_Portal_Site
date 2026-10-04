import Icon from "./Icon.jsx";
import { student } from "../data.js";

export default function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-lg sm:p-space-xl shadow-sm">
      <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
      <div className="absolute right-1/3 -bottom-10 w-64 h-64 rounded-full bg-surface-variant/40 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Portal Active • Session {student.session}
            </span>
            <span className="font-code-sm text-code-sm text-on-surface-variant tracking-wide">
              ID: {student.id}
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight mt-1">
            Welcome back, {student.name}!
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-space-xs flex-wrap">
            <span className="font-medium text-on-surface">{student.className}</span>
            <span className="text-outline-variant">•</span>
            <span>
              Roll Number:{" "}
              <span className="font-code-sm text-code-sm font-medium text-on-surface">
                {student.roll}
              </span>
            </span>
            <span className="text-outline-variant">•</span>
            <span>Academic Stream: {student.stream}</span>
          </p>
        </div>

        <div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-sm self-start lg:self-center">
          <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
            <Icon name="verified_user" className="text-[24px]" />
          </div>
          <div className="flex flex-col pr-space-md">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Invigilation Clearance
            </span>
            <span className="font-headline-sm text-headline-sm text-secondary font-semibold">
              Biometrics Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
