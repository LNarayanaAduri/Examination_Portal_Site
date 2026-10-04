import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const REMOVE_ANIMATION_MS = 300;

export function useStaffDirectory(initialStaff) {
  const [staff, setStaff] = useState(initialStaff);
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('all');
  const [pendingRemoval, setPendingRemoval] = useState(null); // member awaiting confirmation
  const [removingId, setRemovingId] = useState(null); // member whose row is animating out
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return staff.filter((m) => {
      const haystack = `${m.name} ${m.email} ${m.dept}`.toLowerCase();
      return haystack.includes(q) && (role === 'all' || m.role === role);
    });
  }, [staff, query, role]);

  const requestRemoval = useCallback((member) => setPendingRemoval(member), []);
  const cancelRemoval = useCallback(() => setPendingRemoval(null), []);

  const confirmRemoval = useCallback(() => {
    if (!pendingRemoval) return;
    const { id } = pendingRemoval;
    setPendingRemoval(null);
    setRemovingId(id);
    // TODO: revoke access through your API before removing the row
    timerRef.current = setTimeout(() => {
      setStaff((prev) => prev.filter((m) => m.id !== id));
      setRemovingId(null);
    }, REMOVE_ANIMATION_MS);
  }, [pendingRemoval]);

  return {
    visible,
    query,
    setQuery,
    role,
    setRole,
    pendingRemoval,
    removingId,
    requestRemoval,
    cancelRemoval,
    confirmRemoval,
  };
}
