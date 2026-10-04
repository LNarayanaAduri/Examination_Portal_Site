import Icon from "../Icon.jsx";

export default function ProfileFooter() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-2xl py-space-xl">
      <div className="w-full px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-headline-sm text-headline-sm text-on-surface leading-none">
            Vikas Junior College Examination Cell
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
            © 2024 Vikas Educational Institutions. All rights reserved. Strictly confidential.
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-sm text-label-sm text-on-surface">
              Session Monitored &amp; Encrypted (TLS 1.3)
            </span>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <Icon name="support_agent" className="text-base" />
            <span>Helpline: +91 022 2840-9921</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
