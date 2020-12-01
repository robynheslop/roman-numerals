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
});