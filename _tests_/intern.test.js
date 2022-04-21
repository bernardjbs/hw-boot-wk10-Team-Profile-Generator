const Intern = require("../lib/intern");
const intern = new Intern("Junior", 4, "junior@yahoo.com", "ECU");

describe("Intern", () => {
    describe("getName", () => {
        it("Should return the Intern name", () => {
            const getName = intern.getName();
            expect(getName).toBe("Junior");
        });
    });

    describe("getID", () => {
        it("Should return the Intern Id", () => {
            const getID = intern.getId();
            expect(getID).toBe(4);
        });
    });

    describe("getEmail", () => {
        it("Should return the Intern email", () => {
            const getEmail = intern.getEmail();
            expect(getEmail).toBe("junior@yahoo.com");
        });
    });

    describe("getRole", () => {
        it("Should return the Intern role: Intern", () => {
            const getRole = intern.getRole();
            expect(getRole).toBe("Intern");
        });
    });

    describe("getSchool", () => {
        it("Should return the Intern school", () => {
            const getSchool = intern.getSchool();
            expect(getSchool).toBe("ECU");
        });
    });
});