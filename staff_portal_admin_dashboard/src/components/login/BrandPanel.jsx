import Icon from '../Icon.jsx';
import { brand } from '../../data/login.js';

export default function BrandPanel() {
  return (
    <div className="w-full md:w-5/12 bg-primary-container text-on-primary flex flex-col justify-between p-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-secondary opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-on-tertiary-container opacity-20 blur-2xl pointer-events-none" />

      {/* Identity */}
      <div className="relative z-10 flex flex-col space-y-4">
        <div className="inline-flex items-center gap-2 self-start bg-on-primary/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
          <Icon name="verified" className="text-secondary-fixed text-sm" />
          <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
            {brand.badge}
          </span>
        </div>
        <div className="space-y-3 pt-2">
          <div>
            <h1 className="font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight uppercase">
              {brand.name}
            </h1>
            <p className="font-label-sm text-label-sm text-secondary-fixed font-medium uppercase tracking-wider">
              {brand.tagline}
            </p>
          </div>
          <div className="font-label-sm text-label-sm text-surface-tint pt-1 flex items-center gap-1.5">
            <Icon name="domain" className="text-xs" />
            <span>{brand.affiliation}</span>
          </div>
        </div>
      </div>

      {/* Live session card */}
      <div className="relative z-10 my-8 bg-on-primary/5 rounded-xl p-5 backdrop-blur-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold uppercase tracking-wide">
            {brand.session.label}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-code-sm text-code-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
            {brand.session.status}
          </span>
        </div>
        <div className="space-y-1">
          <p className="font-headline-sm text-headline-sm text-on-primary font-bold">{brand.session.title}</p>
          <p className="font-body-sm text-body-sm text-surface-variant">{brand.session.subtitle}</p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
            <Icon name="school" className="text-lg" />
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-primary font-semibold">{brand.session.candidates}</p>
            <p className="font-label-sm text-label-sm text-surface-tint">{brand.session.candidatesNote}</p>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center gap-2 text-surface-dim font-label-sm text-label-sm">
          <Icon name="shield_lock" className="text-base" />
          <span>{brand.encryption}</span>
        </div>
        <p className="font-code-sm text-code-sm text-surface-tint">{brand.verification}</p>
      </div>
    </div>
  );
}
