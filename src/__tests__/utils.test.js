// utils.test.js
import isPalindrome from '../utils';
import { expect, test, describe } from '@jest/globals';

describe('isPalindrome', () => {
    test('returns true for "racecar"', () => {
        expect(isPalindrome("racecar")).toBe(true);
    });

    test('returns false for "car"', () => {
        expect(isPalindrome("car")).toBe(false);
    });

    test('is case insensitive', () => {
        expect(isPalindrome("RaceCar")).toBe(true);
    });

    test('returns false for an empty string', () => {
        expect(isPalindrome("")).toBe(false);
    });

    test('throws an error for non-alphabetic characters', () => {
        expect(() => isPalindrome("racecar!")).toThrow("Input must contain only alphabetic characters");
    });

    test('throws an error if input is not a string', () => {
        expect(() => isPalindrome(123)).toThrow("Input must be a string");
    });
});
