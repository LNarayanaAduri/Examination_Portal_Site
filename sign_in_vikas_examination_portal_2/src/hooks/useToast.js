import { useCallback, useEffect, useRef, useState } from 'react';

export function useToast(duration = 3200) {
  const [toast, setToast] = useState({ visible: false, message: '', success: true });
  const timerRef = useRef(null);

  const show = useCallback(
    (message, success = true) => {
      clearTimeout(timerRef.current);
      setToast({ visible: true, message, success });
      timerRef.current = setTimeout(() => {
        setToast((t) => ({ ...t, visible: false }));
      }, duration);
    },
    [duration]
  );

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return { toast, show };
}
