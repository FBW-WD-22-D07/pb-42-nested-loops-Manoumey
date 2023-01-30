beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Nested Loop Pattern", () => {
    it("Should construct the pattern *, **, ***, **** ", () => {
        const solution = require("../main");
        expect(consoleSpy).toHaveBeenCalledWith("*");
        expect(consoleSpy).toHaveBeenCalledWith("**");
        expect(consoleSpy).toHaveBeenCalledWith("***");
        expect(consoleSpy).toHaveBeenCalledWith("****");
    })
});

describe("2. Nested Loop Pattern", () => {
    it("Given a nested Array of items, Should return the items in each nested Array in a pattern", () => {
        const solution = require("../main");
        expect(consoleSpy).toHaveBeenCalledWith( 1);
        expect(consoleSpy).toHaveBeenCalledWith( 2);
        expect(consoleSpy).toHaveBeenCalledWith("row 1");
        expect(consoleSpy).toHaveBeenCalledWith( 8);
        expect(consoleSpy).toHaveBeenCalledWith( 11);
        expect(consoleSpy).toHaveBeenCalledWith("row 2");
        expect(consoleSpy).toHaveBeenCalledWith("row 3");
    });
});

describe("3. Nested loop Pattern", () => {
    it("Should output '1 1 1 2 2 2 3 3 3 4 4 4' and '0 1 2 3 4 0 1 2 3 4 0 1 2 3 4' ", () => {
        const solution = require("../main");
        expect(consoleSpy).toHaveBeenCalledWith("1 1 1 2 2 2 3 3 3 4 4 4");
        expect(consoleSpy).toHaveBeenCalledWith("0 1 2 3 4 0 1 2 3 4 0 1 2 3 4");
    });
});