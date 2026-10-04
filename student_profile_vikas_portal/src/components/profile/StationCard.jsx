import CardHeading from "./CardHeading.jsx";
import { stationRows } from "../../profileData.js";

export default function StationCard() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <CardHeading icon="router" title="Station & Hardware Lock" subtitle="Exam Session Isolation" />

      <div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
        {stationRows.map((row, i) => (
          <div
            key={row.label}
            className={`flex justify-between py-1.5 ${
              i < stationRows.length - 1 ? "border-b border-surface-container" : ""
            }`}
          >
            <span className="text-on-surface-variant">{row.label}</span>
            <span className={row.valueClass}>{row.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
