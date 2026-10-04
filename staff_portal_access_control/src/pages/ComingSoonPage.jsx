import { Link, useLocation } from 'react-router-dom';

export default function ComingSoonPage() {
  const { pathname } = useLocation();
  return (
    <div className="max-w-xl mx-auto px-margin py-space-2xl text-center">
      <h1 className="font-headline-md text-headline-md text-on-surface mb-2">Screen not converted yet</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
        <span className="font-code-sm">{pathname}</span> has no React page yet.
      </p>
      <Link
        to="/exam-schedule"
        className="inline-flex px-5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md"
      >
        Back to live exam
      </Link>
    </div>
  );
}
