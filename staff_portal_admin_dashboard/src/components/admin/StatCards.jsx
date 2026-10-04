import Icon from '../Icon.jsx';

const ICON_TONE = { primary: 'text-primary', secondary: 'text-secondary' };
const BADGE_TONE = {
  success: 'bg-secondary-container text-on-secondary-container',
  neutral: 'bg-surface-container-high text-on-surface',
  strong: 'bg-surface-container-highest text-on-surface',
};
const NOTE_TONE = { muted: 'text-outline', accent: 'text-secondary font-medium' };
const GLOW = { low: 'bg-surface-container-low', accent: 'bg-secondary-container/20' };

function StatCard({ card }) {
  return (
    <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex items-start justify-between">
        <div
          className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center ${ICON_TONE[card.iconTone]}`}
        >
          <Icon name={card.icon} className="text-[22px]" />
        </div>
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${BADGE_TONE[card.badgeTone]}`}
        >
          {card.badge}
        </span>
      </div>

      <div className="mt-space-lg">
        {card.total ? (
          <div className="flex items-baseline gap-1">
            <span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">
              {card.value}
            </span>
            <span className="font-headline-md text-headline-md text-outline font-normal">{card.total}</span>
          </div>
        ) : (
          <span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">
            {card.value}
          </span>
        )}
        <h3 className="font-label-md text-label-md text-on-surface-variant mt-0.5">{card.label}</h3>
        {card.note && (
          <p className={`font-body-sm text-body-sm mt-1 truncate ${NOTE_TONE[card.noteTone]}`}>{card.note}</p>
        )}
        {card.progress != null && (
          <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div className="bg-secondary h-full rounded-full" style={{ width: `${card.progress}%` }} />
          </div>
        )}
      </div>

      <div
        className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-40 pointer-events-none group-hover:scale-125 transition-transform duration-300 ${GLOW[card.glow]}`}
      />
    </div>
  );
}

export default function StatCards({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
      {cards.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </div>
  );
}
