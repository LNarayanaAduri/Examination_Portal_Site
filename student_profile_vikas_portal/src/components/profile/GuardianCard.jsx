import Icon from "../Icon.jsx";
import CardHeading from "./CardHeading.jsx";
import { guardian as g } from "../../profileData.js";

export default function GuardianCard() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <CardHeading
        icon="family_restroom"
        title="Guardian / Emergency Link"
        subtitle="Parental Notification Sync"
      />

      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-md p-3 rounded-lg bg-surface">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
            {g.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md font-semibold text-on-surface">{g.name}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">{g.relation}</span>
            <span className="font-code-sm text-code-sm text-secondary font-mono">{g.phone}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-2">
          <span className="flex items-center gap-1 text-secondary">
            <Icon name="mark_email_read" className="text-sm" />
            SMS Alerts: Registered
          </span>
          <span>Parent Portal: Linked</span>
        </div>
      </div>

      <div className="pt-space-xs border-t border-surface-container flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Examination Cell Support Helpdesk:
        </span>
        <div className="flex items-center justify-between font-body-sm text-body-sm">
          <span className="font-medium text-on-surface">Room 102, Admin Wing</span>
          <span className="font-mono text-secondary">Extn: 402 / 403</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-2 w-full py-2 px-3 rounded-lg border border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md text-center"
      >
        Request Data or Registry Correction
      </button>
    </section>
  );
}
