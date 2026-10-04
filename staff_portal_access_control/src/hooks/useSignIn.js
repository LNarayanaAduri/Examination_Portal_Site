import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH_REDIRECT } from '../data/login.js';

// Simulated sign-in shared by both login designs.
export function useSignIn({ redirectTo = AUTH_REDIRECT, delay = 1000 } = {}) {
  const navigate = useNavigate();
  const [verifying, setVerifying] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const signIn = useCallback(
    (credentials) => {
      if (verifying) return;
      setVerifying(true);
      // TODO: replace this simulated check with a call to your auth API using `credentials`.
      // On failure, call setVerifying(false) and show an error message.
      timerRef.current = setTimeout(() => navigate(redirectTo), delay);
    },
    [verifying, navigate, redirectTo, delay]
  );

  return { verifying, signIn };
}
