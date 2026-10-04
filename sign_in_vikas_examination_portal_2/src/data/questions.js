import { exam } from './exam.js';

const TYPE = 'Multiple Choice (Single Correct)';
const MARKS = { plus: 4, minus: 1 };

// Question 4 is the real content from the screen.
const question4 = {
  id: 4,
  type: TYPE,
  section: 'Section 1: Differential Calculus',
  marks: MARKS,
  stem: {
    pre: 'Let the real-valued function',
    code: 'f(x)',
    post: 'be defined on ℝ \\ {1} by the rational expression:',
  },
  expression: {
    lhs: 'f(x) =',
    num: 'x³ - 3x + 2',
    den: '(x - 1)²',
    suffix: 'for all x ≠ 1',
  },
  evaluate: { prefix: 'Evaluate the limiting behavior:', lim: 'lim', sub: '(x → 1)', fn: 'f(x)' },
  options: [
    { id: 'A', text: '1' },
    { id: 'B', text: '3' },
    { id: 'C', text: '0' },
    { id: 'D', text: 'Does not exist (DNE)' },
  ],
};

// Every other question is a placeholder so navigation, palette and counts work.
function placeholder(id) {
  return {
    id,
    type: TYPE,
    section: 'Section 1: Differential Calculus',
    marks: MARKS,
    stem: { pre: `Placeholder for question ${id}. Replace this with the real question text.` },
    options: ['A', 'B', 'C', 'D'].map((optId) => ({ id: optId, text: `Option ${optId}` })),
  };
}

export const questions = Array.from({ length: exam.totalQuestions }, (_, i) => {
  const id = i + 1;
  return id === 4 ? question4 : placeholder(id);
});
