// Switch + state label. "Granted" means on, but not part of the baseline.
export default function PermissionToggle({ checked, isDefault, label, onChange }) {
  let text = 'Hidden';
  let textClass = 'text-on-surface-variant';
  if (checked) {
    text = isDefault ? 'Visible' : 'Granted';
    if (!isDefault) textClass = 'text-secondary font-semibold';
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer group">
      <input
        type="checkbox"
        className="sr-only peer"
        aria-label={label}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="w-11 h-6 bg-surface-dim peer-focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-secondary/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
      <span className={`ml-2 font-code-sm text-[12px] ${textClass}`}>{text}</span>
    </label>
  );
}
