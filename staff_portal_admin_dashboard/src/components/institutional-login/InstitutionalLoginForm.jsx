import { useState } from 'react';
import Icon from '../Icon.jsx';
import { formCopy, institutionalCopy as copy } from '../../data/login.js';

const input =
  'w-full py-3 bg-surface rounded-lg font-body-md text-body-md text-on-surface border border-border-strong placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-150';

export default function InstitutionalLoginForm({ verifying, onSubmit }) {
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
          {copy.identifierLabel}
        </label>
        <div className="relative flex items-center">
          <Icon name="fingerprint" className="absolute left-3.5 text-outline text-lg pointer-events-none" />
          <input
            id="identifier"
            name="identifier"
            type="text"
            autoComplete="username"
            required
            aria-describedby="identifier-hint"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={copy.identifierPlaceholder}
            className={`${input} pl-11 pr-4`}
          />
        </div>
        <p id="identifier-hint" className="font-code-sm text-code-sm text-on-surface-variant pl-1">
          {copy.identifierHint}
        </p>
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
            placeholder={copy.passwordPlaceholder}
            className={`${input} pl-11 pr-12`}
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
            className="w-4 h-4 rounded text-secondary border-border-strong bg-surface focus:ring-0 focus:ring-offset-0 cursor-pointer"
          />
          <span className="font-body-sm text-body-sm text-on-surface font-medium">{formCopy.rememberLabel}</span>
        </label>
        <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-medium">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span>{formCopy.lanStatus}</span>
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={verifying}
        aria-busy={verifying}
        className="w-full py-3.5 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-on-primary font-headline-sm text-headline-sm font-semibold shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-80 disabled:cursor-wait"
      >
        <span>{verifying ? formCopy.verifyingLabel : copy.submitLabel}</span>
        <Icon name="arrow_forward" className="text-lg" />
      </button>
    </form>
  );
}
