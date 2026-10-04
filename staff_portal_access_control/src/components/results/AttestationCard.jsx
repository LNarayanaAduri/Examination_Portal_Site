import Icon from '../Icon.jsx';

export default function AttestationCard() {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-space-sm">
        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
          <Icon name="assignment_turned_in" className="text-[20px]" />
        </div>
        <div>
          <span className="font-label-md text-label-md text-on-surface block">Need Official Attestation?</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Request embossed digital transcripts anytime.
          </span>
        </div>
      </div>
      {/* TODO: point at the attestation request route once that screen exists */}
      <a
        href="#attestation"
        className="font-label-sm text-label-sm text-secondary hover:underline font-semibold flex items-center gap-0.5"
      >
        <span>Apply</span>
        <Icon name="arrow_outward" className="text-[16px]" />
      </a>
    </div>
  );
}
