const Manager = require("../lib/manager");

describe("getName", () => {
    it("Should return the Manager name", () => {
        const manager = new Manager("David", 2, "david@yahoo.com", 287);
        const getName = manager.getName();
        expect(getName).toBe("David");
    });
});

describe("getId", () => {
    it("Should return the Manager ID", () => {
        const manager = new Manager("David", 2, "david@yahoo.com", 287);
        const getId = manager.getId();
        expect(getId).toBe(2);
    });
});

describe("getEmail", () => {
    it("Should return the Manager email", () => {
        const manager = new Manager("David", 2, "david@yahoo.com", 287);
        const getEmail = manager.getEmail();
        expect(getEmail).toBe("david@yahoo.com");
    });
});

describe("getRole", () => {
    it("Should rerurn the Manager role", () => {
        const manager = new Manager("David", 2, "david@yahoo.com", 287);
        const getRole = manager.getRole();
        expect(getRole).toBe("Manager");
    });
});

describe("officeNumber", () => {
    it("Should return the Manager office number", () => {
        const manager = new Manager("David", 2, "david@yahoo.com", 287);
        const officeNumber = manager.officeNumber;
        expect(officeNumber).toBe(287);
    });
});