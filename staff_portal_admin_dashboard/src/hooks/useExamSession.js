import { useMemo, useReducer } from 'react';

function visit(state, n) {
  if (n < 1 || n > state.total) return state;
  const status = { ...state.status };
  if (status[n] === 'not-visited') status[n] = 'unanswered';
  return { ...state, current: n, status };
}

function reducer(state, action) {
  const cur = state.current;
  switch (action.type) {
    case 'select':
      return { ...state, answers: { ...state.answers, [cur]: action.optionId } };
    case 'clear': {
      const answers = { ...state.answers };
      delete answers[cur];
      const keep = state.status[cur] === 'marked' ? 'marked' : 'unanswered';
      return { ...state, answers, status: { ...state.status, [cur]: keep } };
    }
    case 'goto':
      return visit(state, action.n);
    case 'prev':
      return visit(state, cur - 1);
    case 'saveNext': {
      const saved = {
        ...state,
        status: { ...state.status, [cur]: state.answers[cur] ? 'answered' : 'unanswered' },
      };
      return visit(saved, cur + 1);
    }
    case 'markNext': {
      const marked = { ...state, status: { ...state.status, [cur]: 'marked' } };
      return visit(marked, cur + 1);
    }
    default:
      return state;
  }
}

export function useExamSession(initialState, marksCorrect) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const counts = useMemo(() => {
    const c = { answered: 0, marked: 0, unanswered: 0, notVisited: 0 };
    Object.values(state.status).forEach((s) => {
      if (s === 'answered') c.answered++;
      else if (s === 'marked') c.marked++;
      else if (s === 'not-visited') c.notVisited++;
      else c.unanswered++;
    });
    return c;
  }, [state.status]);

  const actions = useMemo(
    () => ({
      select: (optionId) => dispatch({ type: 'select', optionId }),
      clear: () => dispatch({ type: 'clear' }),
      goTo: (n) => dispatch({ type: 'goto', n }),
      prev: () => dispatch({ type: 'prev' }),
      saveNext: () => dispatch({ type: 'saveNext' }),
      markNext: () => dispatch({ type: 'markNext' }),
    }),
    []
  );

  return {
    ...state,
    counts,
    estimatedScore: counts.answered * marksCorrect,
    actions,
  };
}
