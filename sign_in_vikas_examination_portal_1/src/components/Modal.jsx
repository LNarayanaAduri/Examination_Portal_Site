import { useEffect } from 'react';

export default function Modal({
  open,
  onClose,
  labelledBy,
  widthClass = 'max-w-lg',
  paddingClass = 'p-6',
  children,
}) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`bg-surface-container-lowest rounded-2xl w-full ${widthClass} ${paddingClass} shadow-2xl relative`}
      >
        {children}
      </div>
    </div>
  );
}
