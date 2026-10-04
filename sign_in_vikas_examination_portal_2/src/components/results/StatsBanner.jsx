import Icon from '../Icon.jsx';

const NOTE_STYLE = {
  delta: 'font-code-sm text-code-sm text-secondary font-semibold',
  muted: 'font-code-sm text-code-sm text-on-surface-variant',
  success: 'font-label-sm text-label-sm text-secondary font-semibold',
};

function StatTile({ stat }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between text-on-surface-variant">
        <span className="font-label-sm text-label-sm uppercase tracking-wider">{stat.label}</span>
        <Icon name={stat.icon} className="text-[18px] text-secondary" />
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        {stat.compact ? (
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{stat.value}</span>
        ) : (
          <span className="font-headline-lg text-headline-lg text-on-surface font-bold">{stat.value}</span>
        )}
        {stat.note && <span className={NOTE_STYLE[stat.noteVariant]}>{stat.note}</span>}
      </div>
      {stat.progress != null && (
        <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-3 overflow-hidden">
          <div className="bg-secondary h-full rounded-full" style={{ width: `${stat.progress}%` }} />
        </div>
      )}
      {stat.footer && (
        <div className="font-code-sm text-code-sm text-on-surface-variant mt-3 truncate">{stat.footer}</div>
      )}
    </div>
  );
}

export default function StatsBanner({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
      {stats.map((stat) => (
        <StatTile key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
