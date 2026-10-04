import Icon from "../Icon.jsx";
import { student } from "../../data.js";
import { profile } from "../../profileData.js";

export default function ProfileHero() {
  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col lg:flex-row gap-space-lg justify-between items-start lg:items-center relative overflow-hidden">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-surface-container-high/50 rounded-full blur-3xl pointer-events-none" />

      {/* Identity */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-lg z-10">
        <div className="relative shrink-0">
          <img
            src={student.avatar}
            alt="Candidate Portrait"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shadow-sm ring-4 ring-surface-container-low"
          />
          <div
            className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary p-1 rounded-full shadow-md flex items-center justify-center"
            title="Biometric Security Cleared"
          >
            <Icon name="verified" className="text-base" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-space-xs">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              {profile.name}
            </h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
              <Icon name="fingerprint" className="text-sm text-secondary" />
              Biometric &amp; Hall ID Verified
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-on-surface-variant">
            <span className="font-code-sm text-code-sm font-semibold text-primary">
              Roll No: {profile.roll}
            </span>
            <span className="text-outline-variant">•</span>
            <span className="font-code-sm text-code-sm">Enrollment: {profile.enrollment}</span>
            <span className="text-outline-variant">•</span>
            <span className="font-label-md text-label-md text-on-surface">{profile.standard}</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-body-sm text-body-sm text-on-surface-variant mt-1">
            {[
              ["school", `Stream: ${profile.stream}`],
              ["mail", profile.email],
              ["phone_iphone", profile.phone],
            ].map(([icon, text]) => (
              <span key={icon} className="flex items-center gap-1">
                <Icon name={icon} className="text-base text-secondary" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row lg:flex-col gap-space-xs w-full lg:w-auto shrink-0 z-10">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-on-surface-variant transition-colors shadow-sm"
        >
          <Icon name="download" className="text-lg" />
          Download Official Hall Pass (PDF)
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors"
        >
          <Icon name="print" className="text-lg" />
          Print Verification Slip
        </button>
      </div>
    </section>
  );
}
