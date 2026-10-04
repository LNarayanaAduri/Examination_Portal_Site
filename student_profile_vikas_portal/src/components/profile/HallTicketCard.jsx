import Icon from "../Icon.jsx";
import { barcodeBars, hallTicket as h } from "../../profileData.js";

function Barcode() {
  return (
    <svg className="h-10 w-48 text-on-surface" fill="currentColor" viewBox="0 0 160 35" aria-hidden="true">
      {barcodeBars.map(([x, w]) => (
        <rect key={x} x={x} y="0" width={w} height="35" />
      ))}
    </svg>
  );
}

export default function HallTicketCard() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high">
        <div className="flex items-center gap-space-xs">
          <Icon name="badge" className="text-secondary text-2xl" />
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">{h.title}</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{h.subtitle}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-secondary-fixed/40 text-on-secondary-fixed-variant rounded-full font-label-sm text-label-sm font-semibold">
          {h.passNo}
        </span>
      </div>

      {/* Allocation matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm bg-surface-container-low p-space-md rounded-xl">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium">
            {h.seat.label}
          </span>
          <span className="font-headline-lg text-headline-lg font-bold text-primary font-mono">
            {h.seat.value}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">{h.seat.sub}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium">
            {h.center.label}
          </span>
          <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
            {h.center.value}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">{h.center.sub}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium">
            {h.verification.label}
          </span>
          <span className="flex items-center gap-1 font-label-md text-label-md font-bold text-secondary">
            <Icon name="verified_user" className="text-base" />
            {h.verification.value}
          </span>
          <span className="font-code-sm text-code-sm text-on-surface-variant">
            {h.verification.sub}
          </span>
        </div>
      </div>

      {/* Authenticator */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-space-md bg-surface-container rounded-lg gap-space-md">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant font-semibold">
            Digital Cryptographic Authenticator
          </span>
          <span className="font-code-sm text-code-sm text-on-surface font-mono">{h.hash}</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">{h.hashNote}</span>
        </div>
        <div className="flex flex-col items-center bg-surface-container-lowest p-2 rounded shadow-sm">
          <Barcode />
          <span className="font-code-sm text-code-sm tracking-widest text-on-surface-variant font-mono mt-1">
            {h.barcodeText}
          </span>
        </div>
      </div>
    </section>
  );
}
