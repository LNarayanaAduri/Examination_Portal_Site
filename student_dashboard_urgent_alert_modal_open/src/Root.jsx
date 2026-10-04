import { useEffect, useState } from "react";
import FacultyApp from "./App.jsx";
import SupervisorApp from "./supervisor/SupervisorApp.jsx";
import StudentApp from "./student/StudentApp.jsx";

// Hash routes:  #/faculty (default)  |  #/supervisor  |  #/student
const routeFromHash = () => {
  const h = window.location.hash;
  if (h.startsWith("#/supervisor")) return "supervisor";
  if (h.startsWith("#/student")) return "student";
  return "faculty";
};

const SCREENS = {
  faculty: FacultyApp,
  supervisor: SupervisorApp,
  student: StudentApp,
};

export default function Root() {
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    const onHash = () => setRoute(routeFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Screen = SCREENS[route];
  return <Screen />;
}
