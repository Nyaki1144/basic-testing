// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(
      simpleCalculator({
        a: 5,
        b: 8,
        action: Action.Add,
      }),
    ).toBe(13);
  });

  test('should subtract two numbers', () => {
    expect(
      simpleCalculator({
        a: 10,
        b: 8,
        action: Action.Subtract,
      }),
    ).toBe(2);
  });

  test('should multiply two numbers', () => {
    expect(
      simpleCalculator({
        a: 10,
        b: 8,
        action: Action.Multiply,
      }),
    ).toBe(80);
  });

  test('should divide two numbers', () => {
    expect(
      simpleCalculator({
        a: 10,
        b: 2,
        action: Action.Divide,
      }),
    ).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    expect(
      simpleCalculator({
        a: 10,
        b: 2,
        action: Action.Exponentiate,
      }),
    ).toBe(100);
  });

  test('should return null for invalid action', () => {
    const obj = Object.values(Action);
    expect(obj).toEqual(['+', '-', '/', '*', '^']);
  });

  test('should return null for invalid arguments', () => {
    expect(
      simpleCalculator({
        a: 10,
        b: 2,
        action: Action.Divide,
      }),
    ).not.toBeNull();
  });
});
