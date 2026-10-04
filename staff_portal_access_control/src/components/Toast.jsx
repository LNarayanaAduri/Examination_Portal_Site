import Icon from './Icon.jsx';

export default function Toast({ visible, message, success }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-lg shadow-xl flex items-center gap-space-sm transform transition-all duration-300 pointer-events-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <Icon
        name={success ? 'check_circle' : 'info'}
        className={`text-[20px] ${success ? 'text-secondary-fixed' : 'text-error'}`}
      />
      <span className="font-body-sm text-body-sm font-medium">{message}</span>
    </div>
  );
}
