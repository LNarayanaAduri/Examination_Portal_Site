import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';

const TONE = {
  neutral: {
    iconBox: 'bg-surface-container text-on-surface',
    tag: 'bg-surface-container text-on-surface-variant',
    link: 'text-primary',
    chevron: 'text-outline-variant group-hover:text-primary',
    glow: 'bg-surface-container-high/40',
  },
  accent: {
    iconBox: 'bg-secondary-container/40 text-secondary',
    tag: 'bg-secondary-container/30 text-on-secondary-container',
    link: 'text-secondary',
    chevron: 'text-secondary/60 group-hover:text-secondary',
    glow: 'bg-secondary-container/20',
  },
};

function TrendChart() {
  return (
    <div className="w-32 h-9" aria-hidden="true">
      <svg className="w-full h-full text-secondary" fill="none" viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 30 Q 30 18 50 24 T 90 8 T 118 4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <path d="M2 30 Q 30 18 50 24 T 90 8 T 118 4 L 118 36 L 2 36 Z" fill="currentColor" fillOpacity="0.1" />
      </svg>
    </div>
  );
}

function PortalCard({ card }) {
  const t = TONE[card.tone];
  return (
    <div className="lg:col-span-6 rounded-xl bg-surface-container-lowest p-space-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-space-sm mb-space-md">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${t.iconBox}`}>
            <Icon name={card.icon} className="text-[26px]" />
          </div>
          <span className={`px-2.5 py-1 rounded-md font-code-sm text-code-sm font-semibold ${t.tag}`}>
            {card.module}
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">{card.title}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed max-w-xl">
          {card.description}
        </p>

        {card.metrics && (
          <div className="flex items-center gap-space-lg mt-space-lg pt-space-md border-t border-surface-container-low">
            {card.metrics.map((metric, i) => (
              <div key={metric.label} className="flex items-center gap-space-lg">
                {i > 0 && <div className="w-px h-8 bg-surface-container-high" />}
                <div className="flex flex-col">
                  <span
                    className={`font-timer-display text-timer-display font-bold ${
                      metric.accent ? 'text-secondary' : 'text-on-surface'
                    }`}
                  >
                    {metric.value}
                  </span>
                  <span className="font-label-sm text-label-sm text-outline">{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {card.trend && (
          <div className="mt-space-lg pt-space-md border-t border-surface-container-low flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-timer-display text-timer-display font-bold text-on-surface">
                {card.trend.value}
              </span>
              <span className="font-label-sm text-label-sm text-outline">{card.trend.label}</span>
            </div>
            <TrendChart />
          </div>
        )}
      </div>

      <div className="mt-space-xl pt-space-sm flex items-center justify-between relative z-10">
        <Link
          to={card.to}
          className={`inline-flex items-center gap-2 font-label-md text-label-md font-bold hover:gap-3 transition-all duration-200 ${t.link}`}
        >
          {card.linkLabel}
          <Icon name="arrow_forward" className="text-[18px]" />
        </Link>
        <Icon name="chevron_right" className={`group-hover:translate-x-1 transition-all ${t.chevron}`} />
      </div>

      <div
        className={`absolute -right-12 -top-12 w-48 h-48 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500 ${t.glow}`}
      />
    </div>
  );
}

export default function PortalCards({ cards }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-2xl">
      {cards.map((card) => (
        <PortalCard key={card.id} card={card} />
      ))}
    </div>
  );
}
