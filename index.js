const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


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
    const memberName = await promptInput(`${role}Name`, "input", `Please enter ${role}'s name:`);
    const memberId = await promptInput(`${role}Id`, "input", `Please enter ${role}'s ID:`);
    const memberEmail = await promptInput(`${role}Email`, "input", `Please enter ${role}'s email address:`);
    if (role == "Manager") {
        const officeNumber = await promptInput(`${role}Name`, "input", `Please enter ${role}'s office number:`);
        const manager = new Manager(memberName, memberId, memberEmail, officeNumber);
        // console.log(manager);
        return manager;
    } else if (role == "Engineer") {
        const github = await promptInput(`${role}Name`, "input", `Please enter ${role}'s github:`);
        const engineer = new Engineer(memberName, memberId, memberEmail, github);
        console.log(engineer);
        return engineer;
    } else if (role == "Intern") {
        const school = await promptInput(`${role}Name`, "input", `Please enter ${role}'s school:`);
        const intern = new Intern(memberName, memberId, memberEmail, school);
        console.log(intern);
        return intern;
    }
}


let teamMembersArr = [];
const chooseRole = async () => {
    const role = await promptInput("chooseTeamMember", "list", "Please choose your team member's role:", ["Engineer", "Intern"]);
    console.log(role);
    buildMember(role.chooseTeamMember);
};

// will return an array of team members objects 
const addTeamMembers = async () => {
    await chooseRole();

    const addMoreMember = await promptInput("moreMember", "confirm", "Do you wish to add another team member?");
    if (addMoreMember.moreMember) addTeamMembers();

};

const init = async () => {
    const manager = await buildMember("Manager");
    console.log(manager);
    await chooseRole();
}

init();