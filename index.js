const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const render = require("./src/render");
let teamMembersArr = [];

const promptInput = (name, type, message, choices = []) => {
    return inquirer.prompt([
        {
            name: name,
            type: type,
            message: message,
            choices: choices
        }
    ]);
};

const buildMember = async (role) => {
    let member = {};
    const name = await promptInput(`${role}`, "input", `Please enter ${role}'s name:`);
    const id = await promptInput(`${role}`, "input", `Please enter ${role}'s ID:`);
    const email = await promptInput(`${role}`, "input", `Please enter ${role}'s email address:`);
    if (role == "Manager") {
        const office = await promptInput(`${role}`, "input", `Please enter ${role}'s office number:`);
        const manager = new Manager(name.Manager, id.Manager, email.Manager, office.Manager);
        member = manager;
    } else if (role == "Engineer") {
        const github = await promptInput(`${role}`, "input", `Please enter ${role}'s github:`);
        const engineer = new Engineer(name.Engineer, id.Engineer, email.Engineer, github.Engineer);
        member = engineer;
    } else if (role == "Intern") {
        const school = await promptInput(`${role}`, "input", `Please enter ${role}'s school:`);
        const intern = new Intern(name.Intern, id.Intern, email.Intern, school.Intern);
        member = intern;
    }
    teamMembersArr.push(member)
    const addMoreMember = await moreMember();
    if(addMoreMember == true) {
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

    // console.log(generateHTML);
    fs.writeFileSync("./dist/index.html", buildTeam);
}

init();