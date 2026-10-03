import { useState } from 'react';
import Icon from '../Icon.jsx';
import { formCopy } from '../../data/login.js';

const inputBase =
  'w-full py-3 bg-surface rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-low focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-150';

export default function LoginForm({ content, verifying, onSubmit }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ identifier, password, remember });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Identity */}
      <div className="space-y-1.5">
        <label htmlFor="identifier" className="block font-label-md text-label-md font-semibold text-on-surface">
          {content.identifierLabel}
        </label>
        <div className="relative flex items-center">
          <Icon name="fingerprint" className="absolute left-3.5 text-outline text-lg pointer-events-none" />
          <input
            id="identifier"
            name="identifier"
            type="text"
            autoComplete="username"
            required
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={content.identifierPlaceholder}
            className={`${inputBase} pl-11 pr-4`}
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block font-label-md text-label-md font-semibold text-on-surface">
            {formCopy.passwordLabel}
          </label>
          {/* TODO: link to the password reset flow */}
          <a
            href="#reset-password"
            className="font-label-sm text-label-sm text-secondary hover:underline font-semibold flex items-center gap-1"
          >
            <span>{formCopy.resetLabel}</span>
            <Icon name="open_in_new" className="text-xs" />
          </a>
        </div>
        <div className="relative flex items-center">
          <Icon name="lock" className="absolute left-3.5 text-outline text-lg pointer-events-none" />
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={formCopy.passwordPlaceholder}
            className={`${inputBase} pl-11 pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
            title="Toggle password view"
            className="absolute right-3 text-outline hover:text-on-surface p-1 rounded transition-colors"
          >
            <Icon name={showPassword ? 'visibility_off' : 'visibility'} className="text-lg" />
          </button>
        </div>
      </div>

      {/* Remember + LAN status */}
      <div className="flex items-center justify-between pt-1">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4 rounded text-secondary bg-surface focus:ring-0 focus:ring-offset-0 cursor-pointer"
          />
          <span className="font-body-sm text-body-sm text-on-surface font-medium">{formCopy.rememberLabel}</span>
        </label>
        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-medium">
          <Icon name="wifi_protected_setup" className="text-sm" />
          <span>{formCopy.lanStatus}</span>
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={verifying}
        aria-busy={verifying}
        className="w-full py-3.5 px-6 rounded-lg bg-primary hover:bg-on-background text-on-primary font-headline-sm text-headline-sm font-semibold shadow-md transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-wait"
      >
        <span>{verifying ? formCopy.verifyingLabel : content.submitLabel}</span>
        <Icon name="arrow_forward" className="text-lg" />
      </button>
    </form>
  );
}
