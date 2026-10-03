import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import BrandPanel from '../components/login/BrandPanel.jsx';
import LoginForm from '../components/login/LoginForm.jsx';
import ExamNotice from '../components/login/ExamNotice.jsx';
import HelpdeskFooter from '../components/login/HelpdeskFooter.jsx';
import { AUTH_REDIRECT, formCopy, variants } from '../data/login.js';

// `variant` picks the copy: 'portal' (default, matches the screen), 'student' or 'staff'.
export default function LoginPage({ variant = 'portal' }) {
  const content = variants[variant] ?? variants.portal;
  const navigate = useNavigate();
  const [verifying, setVerifying] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleSubmit = (credentials) => {
    if (verifying) return;
    setVerifying(true);
    // TODO: replace this simulated check with a call to your auth API.
    // On failure, call setVerifying(false) and show an error message.
    timerRef.current = setTimeout(() => navigate(AUTH_REDIRECT), 1000);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-margin bg-surface">
      <div className="flex flex-col w-full items-center justify-center py-6 px-4">
        <div className="w-full max-w-4xl bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row relative">
          <BrandPanel />

          <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between bg-surface-container-lowest">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6">
                <span className="inline-flex items-center gap-1.5 bg-surface-container text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm font-medium w-fit">
                  <Icon name="workspace_premium" className="text-sm text-secondary" /> {formCopy.systemBadge}
                </span>
              </div>

              <div className="space-y-1 mb-6">
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                  {content.heading}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">{content.subheading}</p>
              </div>

              <LoginForm content={content} verifying={verifying} onSubmit={handleSubmit} />
              <ExamNotice />
            </div>

            <HelpdeskFooter />
          </div>
        </div>
      </div>
    </main>
  );
}
