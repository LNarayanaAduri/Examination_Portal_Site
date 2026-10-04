export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full px-margin flex flex-col sm:flex-row items-center justify-between gap-space-sm">
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          © 2024 Vikas Junior College Assessment System. All rights reserved.
        </span>
        <div className="flex items-center gap-space-md">
          <span className="font-code-sm text-code-sm text-on-surface-variant">
            System Status: Secure &amp; Verified
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-secondary" />
        </div>
      </div>
    </footer>
  );
}
