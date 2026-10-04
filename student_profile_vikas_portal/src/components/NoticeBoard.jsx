import Icon from "./Icon.jsx";
import { notices } from "../data.js";

export default function NoticeBoard() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <Icon name="campaign" className="text-[20px] text-primary" />
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Institutional Notice Board
          </h3>
        </div>
        <span className="w-2 h-2 rounded-full bg-error" />
      </div>

      <div className="flex flex-col gap-space-sm">
        {notices.map((n) => (
          <article
            key={n.id}
            className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-semibold text-on-surface ${n.tagClass}`}
              >
                {n.tag}
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">{n.time}</span>
            </div>
            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">
              {n.title}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{n.body}</p>
            {n.cta && (
              <a
                href="#"
                className="font-label-sm text-label-sm text-secondary font-semibold inline-flex items-center gap-1 hover:underline pt-1"
              >
                <span>{n.cta}</span>
                <Icon name="arrow_forward" className="text-[14px]" />
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="p-space-sm bg-surface-container rounded-lg flex items-center gap-space-sm">
        <Icon name="support_agent" className="text-[20px] text-on-surface-variant" />
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm font-semibold text-on-surface">
            Examinations Desk Support
          </span>
          <span className="font-code-sm text-code-sm text-on-surface-variant">
            Extn: 402 • Room 102 (Admin Block)
          </span>
        </div>
      </div>
    </section>
  );
}
