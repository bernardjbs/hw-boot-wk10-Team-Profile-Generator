const Employee = require("../lib/employee");

describe('getName', () => {
    it('should return the employee name', () => {
        const emp = new Employee("bernard", 1, "bernardjbs@yahoo.com");
        const getName = emp.getName();
        expect(getName).toBe("bernard");
    });
});

describe('getId', () => {
    it('should return the employee ID', () => {
        const emp = new Employee("bernard", 1, "bernardjbs@yahoo.com");
        const getId = emp.getId();
        expect(getId).toBe(1);
    });
});

describe('getEmail', () => {
    it('should return the employee email', () => {
        const emp = new Employee("bernard", 1, "bernardjbs@yahoo.com");
        const getEmail = emp.getEmail();
        expect(getEmail).toBe('bernardjbs@yahoo.com');
    });
});

describe('getRole', () => {
    it('should return the employee role', () => {
        const emp = new Employee("bernard", 1, "bernardjbs@yahoo.com");
        const getRole = emp.getRole();
        expect(getRole).toBe('Employee');
    });
});