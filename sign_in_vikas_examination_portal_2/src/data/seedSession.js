// Demo state that matches the exported screen:
// Q1-3 answered, Q4 current (B picked, not yet saved), Q5 and Q12 marked,
// Q30 not visited, everything else unanswered.
export function demoSession(total) {
  const status = {};
  for (let i = 1; i <= total; i++) status[i] = 'unanswered';
  [1, 2, 3].forEach((i) => (status[i] = 'answered'));
  [5, 12].forEach((i) => (status[i] = 'marked'));
  status[total] = 'not-visited';
  return {
    total,
    current: 4,
    status,
    answers: { 1: 'A', 2: 'B', 3: 'C', 4: 'B', 5: 'D' },
  };
}

// Use this for a real exam start.
export function emptySession(total) {
  const status = {};
  for (let i = 1; i <= total; i++) status[i] = 'not-visited';
  status[1] = 'unanswered';
  return { total, current: 1, status, answers: {} };
}
