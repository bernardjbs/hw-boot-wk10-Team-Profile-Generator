const inquirer = require("inquirer");
const promptInput = require("./src/promptInput");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const render = require("./src/render");
let teamMembersArr = [];

const validation = (input, inputType = '') => {
    if (!input) {
        return "Your input is empty, please try again";
    }
    else if (inputType == "id" && teamMembersArr.length > 0) {
        for(member of teamMembersArr) {
            if (member.id === input) {
                return "The ID already exists. Please enter a unique ID";
            }       
        }
    }
    
    if (inputType == "id" && isNaN(input)) {
        return "Your input is not valid, please input a number";
    }
    else if (inputType == "office" && isNaN(input)) {
        return "Your input is not valid, please input a number";
    }
    else if (inputType == "email" && !input.match(/\S+@\S+\.\S+/)) {
        return "Your input is invalid, please enter a valid email address"
    }
    else if (inputType == "url" && !input.match(/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/)) {
        return "Your input is invalid, please enter a valid URL"
    }
    else { return true }
};

const buildMember = async (role) => {
    let member = {};
    const name = await promptInput(`${role}`, "input", `Please enter ${role}'s name:`, [], (input) => validation(input));
    const id = await promptInput(`${role}`, "input", `Please enter ${role}'s ID:`, [], (input) => validation(input, "id"));
    const email = await promptInput(`${role}`, "input", `Please enter ${role}'s email address:`, [], (input) => validation(input, "email"));
    if (role == "Manager") {
        const office = await promptInput(`${role}`, "input", `Please enter ${role}'s office number:`, [], (input) => validation(input, "office"));
        const manager = new Manager(name.Manager, id.Manager, email.Manager, office.Manager);
        member = manager;
    } else if (role == "Engineer") {
        const github = await promptInput(`${role}`, "input", `Please enter ${role}'s github:`, [], (input) => validation(input, "url"));
        const engineer = new Engineer(name.Engineer, id.Engineer, email.Engineer, github.Engineer);
        member = engineer;
    } else if (role == "Intern") {
        const school = await promptInput(`${role}`, "input", `Please enter ${role}'s school:`, [], (input) => validation(input));
        const intern = new Intern(name.Intern, id.Intern, email.Intern, school.Intern);
        member = intern;
    }
    teamMembersArr.push(member)
    const addMoreMember = await moreMember();
    if (addMoreMember == true) {
        chooseTeamMember();
    }
    return teamMembersArr;
}

const moreMember = async () => {
    const addMoreMember = await promptInput("moreMember", "confirm", "Do you wish to add another team member?");
    if (addMoreMember.moreMember) {
        await chooseTeamMember();
    };
};

const chooseTeamMember = async () => {
    const role = await promptInput("chooseTeamMember", "list", "Please choose your team member's role:", ["Engineer", "Intern"]);
    await buildMember(role.chooseTeamMember);
};

const init = async () => {
    // Start building with the first team member as Manager.
    const team = await buildMember("Manager");
    const buildTeam = `${render.html(team)}`;
    fs.writeFileSync("./dist/index.html", buildTeam);
}

init();

module.exports = { validation, promptInput };