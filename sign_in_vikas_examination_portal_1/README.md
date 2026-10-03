# Vikas Examination Portal (React)

Live exam screen converted from static HTML to React + Vite + Tailwind.

## Run
    npm install
    npm run dev

## Structure
- `src/pages/LiveExamPage.jsx` – the screen; owns modal state and wires the hooks to components
- `src/hooks/useExamSession.js` – answers, statuses, navigation (replaces the palette/question DOM state)
- `src/hooks/useCountdown.js` – timer from a fixed end time, auto-submit on expiry (replaces script.js)
- `src/components/exam/*` – ticker, sub-header, question card, timer, palette, modals
- `src/components/layout/*` – header, footer, layout (shared by every future screen)
- `src/data/*` – exam info, questions, ticker messages, formulas, demo session
- `tailwind.config.js` – your tokens from tailwind-config.js (now built, not CDN)
- `src/index.css` – ticker animation from styles.css

## Screens
- `/exam-schedule` – Live exam (`LiveExamPage`)
- `/past-results` – Past results and transcript (`PastResultsPage`, components in `src/components/results/`, data in `src/data/results.js`)

- `/login` – Sign in (`LoginPage`, no header/footer; copy in `src/data/login.js`, `variant` prop supports student/staff text)

## Next
- Replace placeholder questions 1-3 and 5-30 in `src/data/questions.js`
- Use `emptySession()` instead of `demoSession()` for a real exam start
- Download the logo/avatar into `src/assets/` (the URLs in `src/data/assets.js` are temporary)
- Add the next screen as a page and route in `src/App.jsx`
