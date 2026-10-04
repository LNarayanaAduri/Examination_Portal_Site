import Icon from "../Icon.jsx";
import CardHeading from "./CardHeading.jsx";
import { biometrics } from "../../profileData.js";

export default function SecurityCard() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <CardHeading icon="shield_lock" title="Security & Biometrics" subtitle="Proctor & Invigilation Clearance" />

      <div className="flex flex-col gap-space-xs">
        {biometrics.map((b) => (
          <div key={b.title} className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
            <div className="flex items-center gap-space-xs">
              <Icon name={b.icon} className="text-secondary" />
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-semibold">{b.title}</span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">{b.sub}</span>
              </div>
            </div>
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-fixed/50 text-on-secondary-fixed-variant font-bold">
              {b.status}
            </span>
          </div>
        ))}
      </div>

      {/* QR-style clearance token */}
      <div className="p-space-md rounded-xl bg-surface-container flex items-center gap-space-md">
        <div className="w-16 h-16 bg-surface-container-lowest p-1 rounded-md shrink-0 flex items-center justify-center shadow-sm">
          <svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2,2H10V10H2V2M4,4V8H8V4H4M2,14H10V22H2V14M4,16V20H8V16H4M14,2H22V10H14V2M16,4V8H20V4H16M14,14H16V16H14V14M18,14H20V16H18V14M16,18H18V20H16V18M20,18H22V20H20V18M14,20H16V22H14V20M18,20H20V22H18V20M20,16H22V18H20V16M16,16H18V18H16V16Z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md font-bold text-on-surface">
            Proctor Security Clearance Token
          </span>
          <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">
            TOKEN: #VKS-SEC-9901-OK
          </span>
          <span className="font-body-sm text-body-sm text-secondary font-medium mt-1">
            Instant check-in via optical reader
          </span>
        </div>
      </div>
    </section>
  );
}
