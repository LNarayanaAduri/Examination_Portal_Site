import Icon from '../Icon.jsx';
import { institutionalBrand as brand } from '../../data/login.js';

export default function InstitutionalBrandPanel() {
  return (
    <div className="w-full md:w-5/12 bg-slate-900 text-on-primary flex flex-col justify-between p-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-secondary opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondary-fixed opacity-10 blur-2xl pointer-events-none" />

      {/* Identity */}
      <div className="relative z-10 flex flex-col space-y-4">
        <div className="inline-flex items-center gap-2 self-start bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
          <Icon name="verified" className="text-secondary-fixed text-sm" />
          <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
            {brand.badge}
          </span>
        </div>
        <div className="space-y-2 pt-2">
          <div>
            <h1 className="font-headline-sm text-headline-sm text-white font-bold tracking-tight uppercase">
              {brand.name}
            </h1>
            <p className="font-label-sm text-label-sm text-secondary-fixed font-medium uppercase tracking-wider">
              {brand.tagline}
            </p>
          </div>
          <div className="font-label-sm text-label-sm text-slate-300 pt-1 flex items-center gap-1.5">
            <Icon name="domain" className="text-xs text-secondary-fixed" />
            <span>{brand.affiliation}</span>
          </div>
        </div>
      </div>

      {/* Live session card */}
      <div className="relative z-10 my-8 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold uppercase tracking-wide">
            {brand.session.label}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary text-white font-code-sm text-code-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
            {brand.session.status}
          </span>
        </div>
        <div className="space-y-1">
          <p className="font-headline-sm text-headline-sm text-white font-bold">{brand.session.title}</p>
          <p className="font-body-sm text-body-sm text-slate-300">{brand.session.subtitle}</p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white flex-shrink-0">
            <Icon name="school" className="text-lg" />
          </div>
          <div>
            <p className="font-label-md text-label-md text-white font-semibold">{brand.session.candidates}</p>
            <p className="font-label-sm text-label-sm text-slate-300">{brand.session.candidatesNote}</p>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="relative z-10 space-y-1.5 pt-2 border-t border-white/10">
        <div className="flex items-center gap-2 text-slate-200 font-label-sm text-label-sm">
          <Icon name="shield_lock" className="text-base text-secondary-fixed" />
          <span className="font-medium">{brand.encryption}</span>
        </div>
        <p className="font-code-sm text-code-sm text-slate-400">{brand.verification}</p>
      </div>
    </div>
  );
}
