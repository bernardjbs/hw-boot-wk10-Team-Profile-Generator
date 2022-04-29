const inquirer = require('inquirer');
const promptInput = require("../src/promptInput");

// Mock the inquirer module
jest.mock("inquirer");
describe("PromptInput", () => {
  test("user input", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ managerName: "bernard" });
    await promptInput().then((resp) =>
      expect(resp).toEqual({ managerName: "bernard" })
    );
  });
});
