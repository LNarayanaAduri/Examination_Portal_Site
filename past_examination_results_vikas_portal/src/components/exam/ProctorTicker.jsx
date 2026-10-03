import { Fragment } from 'react';
import Icon from '../Icon.jsx';
import { broadcasts } from '../../data/broadcasts.js';

const TAG_STYLES = {
  advisory: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  notice: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  integrity: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  support: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
};

function TickerItem({ item }) {
  return (
    <span className="inline-flex items-center gap-2 px-6">
      <span
        className={`px-1.5 py-0.5 rounded font-code-sm text-[11px] font-semibold border ${TAG_STYLES[item.kind]}`}
      >
        {item.label}
      </span>
      {item.strong && <strong className="text-white">{item.strong}</strong>} {item.text}
    </span>
  );
}

export default function ProctorTicker() {
  return (
    <div
      className="w-full bg-[#131b2e] text-white overflow-hidden z-40 shadow-sm proctor-marquee-container select-none"
      aria-label="Proctor broadcasts"
    >
      <div className="flex items-center h-10 w-full">
        <div className="shrink-0 z-10 flex items-center gap-2 bg-[#ba1a1a] text-white px-3.5 h-full font-label-sm text-label-sm font-bold tracking-wide uppercase shadow-md">
          <Icon name="campaign" className="text-[16px] animate-pulse" />
          <span className="whitespace-nowrap">Proctor Broadcast</span>
        </div>

        <div className="flex-1 overflow-hidden relative flex items-center h-full bg-[#131b2e] cursor-default">
          <div className="animate-proctor-marquee py-1 text-[13px] font-body-sm font-medium tracking-wide flex items-center text-slate-200">
            {/* Two identical copies so the -50% translate loops seamlessly */}
            {[0, 1].map((copy) => (
              <div key={copy} className="inline-flex items-center" aria-hidden={copy === 1}>
                {broadcasts.map((item) => (
                  <Fragment key={item.id}>
                    <TickerItem item={item} />
                    <span className="text-slate-500">•</span>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 hidden md:flex items-center gap-1.5 px-3 bg-[#131b2e] border-l border-slate-700/60 text-slate-400 font-code-sm text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="uppercase tracking-wider">Live Ticker</span>
        </div>
      </div>
    </div>
  );
}
