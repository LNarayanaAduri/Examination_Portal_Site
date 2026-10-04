import Icon from "../Icon.jsx";

// Icon + title/subtitle row with a bottom divider, used by the side cards.
export default function CardHeading({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-space-xs pb-space-sm border-b border-surface-container-high">
      <Icon name={icon} className="text-secondary text-2xl" />
      <div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{title}</h3>
        <p className="font-label-sm text-label-sm text-on-surface-variant">{subtitle}</p>
      </div>
    </div>
  );
}
