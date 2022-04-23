const render = require("../src/render");
const Manager = require("../lib/manager");
const manager = new Manager("bernard", 1, "bernardjbs@yahoo.com", 10)

const Engineer = require("../lib/engineer");
const engineer = new Engineer("harry", 2, "harry@yahoo.com", "http://www.github.com/harry");

const Intern = require("../lib/intern");
const intern = new Intern("junior", 3, "junior@yahoo.com", "UWA");

let team = [manager, engineer, intern];

describe("generateMembers", () => {
    it("Should generate html for an array of team members objects", () => {
        const genMembers = render.generateMembers(team).replaceAll(" ", "");
        const compMembers = `
        <section class="member-card" id="1">
            <h2>Manager</h2>
            <h2>[Manager Icon] bernard</h2>
            <p>ID: 1</p>
            <p>Email: bernardjbs@yahoo.com</p>
            <p>Office Number: 10</p>
        </section>
        <section class="member-card" id="2">
            <h2>Engineer</h2>
            <h2>[Engineer Icon] harry</h2>
            <p>ID: 2</p>
            <p>Email: harry@yahoo.com</p>
            <p>Github: http://www.github.com/harry</p>
        </section>
            <section class="member-card" id="3">
            <h2>Intern</h2>
            <h2>[Intern Icon] junior</h2>
            <p>ID: 3</p>
            <p>Email: junior@yahoo.com</p>
            <p>School: UWA</p>
        </section>`
        expect(genMembers).toMatch(compMembers.replaceAll(" ", ""));
    })
})

// Test getChildMember function for Manager
describe("getChildMember", () => {
    const expectedManager = {
        icon: "[Manager Icon]", 
        option: "Office Number: 10"
    };

    const expectedEngineer = {
        icon: "[Engineer Icon]", 
        option: "Github: http://www.github.com/harry"
    };

    const expectedIntern = {
        icon: "[Intern Icon]", 
        option: "School: UWA"
    };

    it("Should return an object with icon manager and office number 10", () => {
        expect(render.getChildMember(manager)).toEqual(expectedManager);
        expect(render.getChildMember(engineer)).toEqual(expectedEngineer);
        expect(render.getChildMember(intern)).toEqual(expectedIntern);
    });
});