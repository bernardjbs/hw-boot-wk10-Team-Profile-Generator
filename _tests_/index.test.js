const index = require("../index");
const inquirer = require('inquirer');

// const promptInput = index.promptInput;

// jest.mock("inquirer");
// describe("Module test", () => {
//   test("user input", async () => {
//     inquirer.prompt = jest
//       .fn()
//       .mockResolvedValue({ githubHandle: "cupacheeno" });
//     await promptInput().then((resp) =>
//       expect(resp).toEqual({ githubHandle: "cupacheeno" })
//     );
//   });
// });

// Validation tests for the user input
describe("validation", () => {
    it("Should fail if there is an empty iput", () => {
        const input = "";
        const validate = index.validation(input, "");
        expect(validate).toBe("Your input is empty, please try again");
    });
    it("Should fail if the input for id is not a number", () => {
        const input = "abc";
        const inputType = "id";
        const validate = index.validation(input, inputType);
        expect(validate).toBe("Your input is not valid, please input a number");
    });
    it("Should fail if the input for office number is not a number", () => {
        const input = "abc";
        const inputType = "office";
        const validate = index.validation(input, inputType);
        expect(validate).toBe("Your input is not valid, please input a number");
    });    
    it("Should fail if the input is not a correct email format", () => {
        const input = "abc";
        const inputType = "email";
        const validate = index.validation(input, inputType);
        expect(validate).toBe("Your input is invalid, please enter a valid email address");
    });
    it("Should fail if the input is not a correct url format", () => {
        const input = "abc";
        const inputType = "url";
        const validate = index.validation(input, inputType);
        expect(validate).toBe("Your input is invalid, please enter a valid URL");
    });
    it("Should pass if the input is not empty", () => {
        const input = "123";
        const validate = index.validation(input, "");
        expect(validate).toBe(true);
    });
    it("Should pass if the input for id is a number", () => {
        const input = "123";
        const inputType = "id";
        const validate = index.validation(input, inputType);
        expect(validate).toBe(true);
    });
    it("Should pass if the input for office is a number", () => {
        const input = "123";
        const inputType = "office";
        const validate = index.validation(input, inputType);
        expect(validate).toBe(true);
    });
    it("Should pass if the input is a correct email format", () => {
        const input = "email@host.com";
        const inputType = "email";
        const validate = index.validation(input, inputType);
        expect(validate).toBe(true);
    });
    it("Should pass if the input is a correct url format", () => {
        const input = "http://www.google.com";
        const inputType = "url";
        const validate = index.validation(input, inputType);
        expect(validate).toBe(true);
    });
});