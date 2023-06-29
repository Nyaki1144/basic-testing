import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  // continue cases for other actions
];

describe('simpleCalculator', () => {
  test.each(testCases)('should blah-blah', (el) => {
    const arg = Object.values(el);

    expect(simpleCalculator(el)).toBe(arg.at(-1));
  });
  // Consider to use Jest table tests API to test all cases above
});
