const myFunctions = require('./functions.js');

describe('div()', () => {
  test('divides positive numbers', () => {
    expect(myFunctions.div(6, 3)).toBe(2);
  });

  test('divides negative numbers', () => {
    expect(myFunctions.div(-6, 3)).toBe(-2);
  });

  test('handles division by zero (Infinity)', () => {
    expect(myFunctions.div(5, 0)).toBe(Infinity);
  });

  test('handles zero divided by anything', () => {
    expect(myFunctions.div(0, 5)).toBe(0);
  });

  test('handles decimals correctly', () => {
    expect(myFunctions.div(5, 2)).toBeCloseTo(2.5);
  });
});

describe('containsNumbers()', () => {
  test('detects digits in a string', () => {
    expect(myFunctions.containsNumbers('abc123')).toBe(true);
  });

  test('returns false for a string with no digits', () => {
    expect(myFunctions.containsNumbers('hello')).toBe(false);
  });

  test('returns false for an empty string', () => {
    expect(myFunctions.containsNumbers('')).toBe(false);
  });

  test('returns false for a space', () => {
    // originally fails, false positive
    expect(myFunctions.containsNumbers(' ')).toBe(false);
  });

  test('returns false for punctuation', () => {
    expect(myFunctions.containsNumbers('hello!')).toBe(false);
  });

  test('detects single numeric character', () => {
    expect(myFunctions.containsNumbers('5')).toBe(true);
  });

  test('detects number mixed with letters', () => {
    expect(myFunctions.containsNumbers('room9')).toBe(true);
  });

  test('handles numbers at the start', () => {
    expect(myFunctions.containsNumbers('9lives')).toBe(true);
  });

  test('handles numbers at the end', () => {
    expect(myFunctions.containsNumbers('level2')).toBe(true);
  });
});