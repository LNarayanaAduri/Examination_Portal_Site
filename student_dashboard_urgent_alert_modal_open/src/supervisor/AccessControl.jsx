import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { FACULTY_PERMISSIONS, PERMISSION_COLUMNS } from "./data.js";

function Toggle({ checked, onChange, label }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} aria-label={label} />
      <div className="w-9 h-5 bg-outline-variant rounded-full peer peer-focus-visible:ring-2 peer-focus-visible:ring-secondary/40 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary" />
    </label>
  );
}

export default function AccessControl() {
  const [perms, setPerms] = useState(FACULTY_PERMISSIONS);
  const [saved, setSaved] = useState(FACULTY_PERMISSIONS);
  const [justSaved, setJustSaved] = useState(false);

  const dirty = JSON.stringify(perms) !== JSON.stringify(saved);

  const toggle = (id, key) => {
    setJustSaved(false);
    setPerms((list) => list.map((f) => (f.id === id ? { ...f, perms: { ...f.perms, [key]: !f.perms[key] } } : f)));
  };

  const save = () => {
    setSaved(perms);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2500);
  };

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm" id="access-control">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-outline-variant gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-headline-md font-bold text-on-surface">Faculty Access Control Panel</h2>
            <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold rounded-full">
              Moderator Privileges
            </span>
          </div>
          <p className="text-xs text-outline mt-0.5">Configure sidebar access and permission rights for departmental faculty members.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary-fixed/30 border border-secondary/30 rounded-lg text-xs font-medium text-secondary">
            <Icon name={justSaved ? "check_circle" : dirty ? "pending" : "sync"} size={16} />
            <span>{justSaved ? "Permissions saved" : dirty ? "Unsaved changes" : "Permissions synced with LDAP"}</span>
          </div>
          <button
            onClick={save}
            disabled={!dirty}
            className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-container transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Permissions
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto border border-outline-variant rounded-lg">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-container-low border-b border-outline-variant text-outline uppercase font-semibold">
            <tr>
              <th className="py-3 px-4">Faculty Member &amp; Dept</th>
              {PERMISSION_COLUMNS.map((c) => (
                <th key={c.key} className="py-3 px-4 text-center">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant font-medium text-on-surface">
            {perms.map((f) => (
              <tr key={f.id} className="hover:bg-surface-container-low/30">
                <td className="py-3 px-4">
                  <span className="font-bold text-sm block">{f.name}</span>
                  <span className="text-xs text-outline">{f.dept}</span>
                </td>
                {PERMISSION_COLUMNS.map((c) => (
                  <td key={c.key} className="py-3 px-4 text-center">
                    <Toggle checked={f.perms[c.key]} onChange={() => toggle(f.id, c.key)} label={`${f.name}: ${c.label}`} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
