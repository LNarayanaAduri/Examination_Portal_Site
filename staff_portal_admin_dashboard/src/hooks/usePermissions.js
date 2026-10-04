import { useCallback, useMemo, useState } from 'react';

// Holds each faculty member's current tab permissions and works out which
// ones differ from the baseline ("overrides").
export function usePermissions(faculty) {
  const [perms, setPerms] = useState(() =>
    Object.fromEntries(faculty.map((m) => [m.id, { ...m.initial }]))
  );

  const isCustomized = useCallback(
    (member) => Object.keys(member.defaults).some((key) => perms[member.id][key] !== member.defaults[key]),
    [perms]
  );

  const setPermission = useCallback((id, key, value) => {
    setPerms((prev) => ({ ...prev, [id]: { ...prev[id], [key]: value } }));
  }, []);

  const resetMember = useCallback(
    (id) => {
      const member = faculty.find((m) => m.id === id);
      setPerms((prev) => ({ ...prev, [id]: { ...member.defaults } }));
    },
    [faculty]
  );

  const resetAll = useCallback(() => {
    setPerms(Object.fromEntries(faculty.map((m) => [m.id, { ...m.defaults }])));
  }, [faculty]);

  const overrideCount = useMemo(
    () => faculty.filter((m) => isCustomized(m)).length,
    [faculty, isCustomized]
  );

  return { perms, isCustomized, setPermission, resetMember, resetAll, overrideCount };
}
