const index = require("../index");

describe("validation", () => {
    it("Should validate empty iput", () => {
        const input = "";
        const inputType = "";
        const validate = index.validation(input, "");
        expect(validate).toBe("Your input is empty, please try again");
    });
    it("Should check if the input is a number if the inputType is 'number'", () => {
        const input = "abc";
        const inputType = "number";
        const validate = index.validation(input, inputType);
        expect(validate).toBe("Your input is not valid, please input a number");
    });
    it("Should check if the input email has the correct format when the input type is 'email'", () => {
        const input = "abc";
        const inputType = "email";
        const validate = index.validation(input, inputType);
        expect(validate).toBe("Your input is invalid, please enter a valid email address");
    });
    it("Should check if the input url is the correct format when the input type is 'url'", () => {
        const input = "abc";
        const inputType = "url";
        const validate = index.validation(input, inputType);
        expect(validate).toBe("Your input is invalid, please enter a valid URL");
    });
});