export const formulaSections = [
  {
    id: 'limits',
    title: 'Standard Limits',
    lines: [
      { mono: true, text: 'lim (x → a) [xⁿ - aⁿ] / [x - a] = n · aⁿ⁻¹' },
      { mono: true, text: 'lim (x → 0) [sin(x) / x] = 1' },
    ],
  },
  {
    id: 'lhopital',
    title: "L'Hôpital's Rule",
    lines: [
      {
        mono: false,
        text: "If lim f(x) = lim g(x) = 0 or ±∞ as x → c, then lim [f(x)/g(x)] = lim [f'(x)/g'(x)], provided the latter limit exists.",
      },
    ],
  },
  {
    id: 'factorization',
    title: 'Polynomial Factorization Hint',
    lines: [{ mono: true, text: 'x³ - 3x + 2 = (x - 1)² · (x + 2)' }],
  },
];
