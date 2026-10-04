import Icon from '../Icon.jsx';

export default function InvitationsBanner() {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md text-center sm:text-left">
        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary flex-shrink-0">
          <Icon name="mark_email_read" className="text-[20px]" />
        </div>
        <div>
          <h4 className="font-label-md text-label-md font-semibold text-on-surface">No Pending Staff Invitations</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            All dispatched credentials for the mid-term cycle have been claimed and dual-authenticated.
          </p>
        </div>
      </div>
      {/* TODO: link to the invitation archive */}
      <button
        type="button"
        className="px-4 py-2 rounded-lg bg-surface text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors whitespace-nowrap"
      >
        View Invitation Archive
      </button>
    </div>
  );
}
