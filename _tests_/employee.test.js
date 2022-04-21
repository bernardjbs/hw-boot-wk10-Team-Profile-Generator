const Employee = require("../lib/employee");
const emp = new Employee("bernard", 1, "bernardjbs@yahoo.com");

describe("Employee", () => {
    describe('getName', () => {
        it('should return the employee name', () => {
            const getName = emp.getName();
            expect(getName).toBe("bernard");
        });
    });
    
    describe('getId', () => {
        it('should return the employee ID', () => {
            const getId = emp.getId();
            expect(getId).toBe(1);
        });
    });
    
    describe('getEmail', () => {
        it('should return the employee email', () => {
            const getEmail = emp.getEmail();
            expect(getEmail).toBe('bernardjbs@yahoo.com');
        });
    });
    
    describe('getRole', () => {
        it('should return the employee role', () => {
            const getRole = emp.getRole();
            expect(getRole).toBe('Employee');
        });
    });
});