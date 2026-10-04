import Icon from '../components/Icon.jsx';
import InstitutionalBrandPanel from '../components/institutional-login/InstitutionalBrandPanel.jsx';
import InstitutionalLoginForm from '../components/institutional-login/InstitutionalLoginForm.jsx';
import ExamNotice from '../components/login/ExamNotice.jsx';
import HelpdeskFooter from '../components/login/HelpdeskFooter.jsx';
import { useSignIn } from '../hooks/useSignIn.js';
import { formCopy, institutionalCopy as copy } from '../data/login.js';

export default function InstitutionalLoginPage() {
  const { verifying, signIn } = useSignIn();

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 md:p-margin bg-surface">
      <div className="flex flex-col w-full items-center justify-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row relative border border-border-subtle">
          <InstitutionalBrandPanel />

          <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between bg-surface-container-lowest">
            <div>
              <div className="flex items-center justify-between gap-3 pb-6">
                <span className="inline-flex items-center gap-1.5 bg-surface-container text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm font-medium">
                  <Icon name="workspace_premium" className="text-sm text-secondary" />
                  {formCopy.systemBadge}
                </span>
              </div>

              <div className="space-y-1.5 mb-6">
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                  {copy.heading}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">{copy.subheading}</p>
              </div>

              <InstitutionalLoginForm verifying={verifying} onSubmit={signIn} />
              <ExamNotice bordered />
            </div>

            <HelpdeskFooter bordered />
          </div>
        </div>
      </div>
    </main>
  );
}
