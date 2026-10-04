import { useEffect, useState } from "react";
import FacultyApp from "./App.jsx";
import SupervisorApp from "./supervisor/SupervisorApp.jsx";

// Hash routes:  #/faculty (default)  |  #/supervisor
const routeFromHash = () => (window.location.hash.startsWith("#/supervisor") ? "supervisor" : "faculty");

export default function Root() {
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    const onHash = () => setRoute(routeFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route === "supervisor" ? <SupervisorApp /> : <FacultyApp />;
}
