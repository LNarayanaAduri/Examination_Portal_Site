import Icon from "./Icon.jsx";
import { tickerItems } from "../data.js";

export default function Ticker() {
  // Items are rendered twice so the -50% marquee loop is seamless.
  const loop = [...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-surface-container-high border-b border-outline-variant/30 text-on-surface shadow-sm overflow-hidden z-20 flex items-center">
      <div className="shrink-0 pl-margin pr-space-md py-2 relative z-10 bg-surface-container-high">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-error text-on-error font-label-md text-label-md font-semibold uppercase">
          <Icon name="campaign" className="text-[20px]" />
          Urgent Advisory
        </span>
      </div>

      <div className="flex-1 overflow-hidden relative">
        <div className="ticker-track animate-marquee items-center gap-space-lg text-body-sm font-body-sm text-on-surface cursor-pointer select-none">
          {loop.map((item, i) => (
            <span key={i} className="contents">
              <span className="flex items-center gap-2">
                <strong className="text-secondary font-semibold">[{item.tag}]</strong>
                {item.text}
              </span>
              <span className="text-outline-variant font-bold">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
