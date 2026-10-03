import { useEffect, useRef, useState } from 'react';

// Counts down from a fixed end time (not by decrementing), so it stays
// accurate when the browser throttles timers in a background tab.
export function useCountdown(initialSeconds, { running = true, onExpire } = {}) {
  const [remaining, setRemaining] = useState(initialSeconds);
  const endAtRef = useRef(Date.now() + initialSeconds * 1000);
  const expireRef = useRef(onExpire);

  useEffect(() => {
    expireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    if (!running) return undefined;
    endAtRef.current = Date.now() + remaining * 1000;
    const id = setInterval(() => {
      const left = Math.max(0, Math.ceil((endAtRef.current - Date.now()) / 1000));
      setRemaining(left);
      if (left === 0) {
        clearInterval(id);
        expireRef.current?.();
      }
    }, 500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return remaining;
}
