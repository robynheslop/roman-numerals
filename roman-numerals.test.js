// This kata lures a lot of people to implement features in the order of the numbers. 
// But do not forget that it’s sometimes easier to start with a general case and add exceptions later.

import romanNumerals from "./roman-numerals";

describe("generator receives numbers and returns the roman numeral of that number", () => {
    it("receives 1, returns I", () => {
        expect(romanNumerals(1)).toBe("I");
    });
    it("receives 2, returns II", () => {
        expect(romanNumerals(2)).toBe("II");
    });
    it("receives 3, returns III", () => {
        expect(romanNumerals(3)).toBe("III");
    });
    it("receives 5, returns V", () => {
        expect(romanNumerals(5)).toBe("V");
    });
    it("receives 8, returns VIII", () => {
        expect(romanNumerals(8)).toBe("VIII");
    });
    it("receives 10, returns X", () => {
        expect(romanNumerals(10)).toBe("X");
    });
    it("receives 13, returns X", () => {
        expect(romanNumerals(13)).toBe("XIII");
    });
    it("receives 4, returns IV", () => {
        expect(romanNumerals(4)).toBe("IV");
    });
    it("receives 9, returns IX", () => {
        expect(romanNumerals(9)).toBe("IX");
    });
    it("receives 20, returns XX", () => {
        expect(romanNumerals(20)).toBe("XX");
    });
    it("receives 22, returns XXII", () => {
        expect(romanNumerals(22)).toBe("XXII");
    });
    it("receives 25, returns XXV", () => {
        expect(romanNumerals(25)).toBe("XXV");
    });
    it("receives 29, returns XXIX", () => {
        expect(romanNumerals(29)).toBe("XXIX");
    });
    it("receives 31, returns XXXI", () => {
        expect(romanNumerals(31)).toBe("XXXI");
    });
    it("receives 36, returns XXXVI", () => {
        expect(romanNumerals(36)).toBe("XXXVI");
    });
    it("receives 38, returns XXXVIII", () => {
        expect(romanNumerals(38)).toBe("XXXVIII");
    });
    it("receives 40, returns XL", () => {
        expect(romanNumerals(40)).toBe("XL");
    });
    it("receives 42, returns XLII", () => {
        expect(romanNumerals(42)).toBe("XLII");
    });
    it("receives 50, returns L", () => {
        expect(romanNumerals(50)).toBe("L");
    });
});