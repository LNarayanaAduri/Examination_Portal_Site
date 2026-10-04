import Icon from "../Icon.jsx";
import { courses } from "../../profileData.js";

const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);

export default function CurriculumRoster() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high">
        <div className="flex items-center gap-space-xs">
          <Icon name="menu_book" className="text-secondary text-2xl" />
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Curriculum &amp; Course Assessment Roster
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Class XII Higher Secondary Science (PCMC Stream)
            </p>
          </div>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-md">
          Total Credits: {totalCredits} Units
        </span>
      </div>

      <div className="flex flex-col gap-space-sm">
        {courses.map((c) => (
          <div
            key={c.code}
            className="p-space-md rounded-xl bg-surface hover:bg-surface-container-low transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-md"
          >
            <div className="flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary font-code-sm font-bold shrink-0">
                {c.abbr}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface">{c.name}</span>
                  <span className="font-code-sm text-code-sm bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">
                    {c.code}
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Faculty In-Charge: {c.faculty} • {c.credits} Credits
                </span>
              </div>
            </div>

            <div className="flex items-center gap-space-lg shrink-0">
              <div className="flex flex-col gap-1 w-28">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="text-on-surface-variant">Syllabus</span>
                  <span className="font-semibold text-primary">{c.syllabus}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${c.syllabus}%` }} />
                </div>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                  Internal Score
                </span>
                <span className="font-code-sm text-code-sm font-bold text-secondary font-mono">
                  {c.score} / 50
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
