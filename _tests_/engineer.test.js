const Enginerer = require("../lib/engineer");
const engineer = new Enginerer("Bill", 3, "bill@yahoo.com", "https://www.github.com/bill");

describe("Engineer", () => {
    describe("getName", () => {
        it("Should return the Engineer Name", () => {
            const getName = engineer.getName();
            expect(getName).toBe("Bill");
        });
    });
    
    describe("getID", () => {
        it("Should return the Engineer Id", () => {
            const getID = engineer.getId();
            expect(getID).toBe(3);
        });
    });
    
    describe("getEmail", () => {
        it("Should return the Engineer email", () => {
            const getEmail =engineer.getEmail();
            expect(getEmail).toBe("bill@yahoo.com");
        });
    });
    
    describe("getRole", () => {
        it("Should return Engineer", () => {
            const getRole = engineer.getRole();
            expect(getRole).toBe("Engineer");
        });
    });
    
    describe("getGithub", () => {
        it("Should return the Engineer github", () => {
            const getGithub = engineer.getGithub();
            expect(getGithub).toBe("https://www.github.com/bill");
        });
    });
});