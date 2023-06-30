// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const res = await resolveValue('ban kay');
    expect(res).toBe('ban kay');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    function throwMyError() {
      throwError('koko');
    }
    expect(throwMyError).toThrowError('koko');
  });

  test('should throw error with default message if message is not provided', () => {
    function throwMyError() {
      throwError();
    }
    expect(throwMyError).toThrowError('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    function throwMyError() {
      throwCustomError();
    }
    expect(throwMyError).toThrowError(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(new MyAwesomeError());
  });
});
