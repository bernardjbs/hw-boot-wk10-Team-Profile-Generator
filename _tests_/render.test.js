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
        <section id="card-name">
          <h2 id="name">bernard</h2>
          </section>
          <section id="card-role">
          <section id="icons">
            <img src="../src/images/manager.png" class="role-icon">
          </section>
            <h3 id="role">Manager</h3>
          </section>
          <section id="card-info">
            <p>ID: 1</p>
            <p>Email: <a href="mailto:bernardjbs@yahoo.com">bernardjbs@yahoo.com</a></p>
            <p>Office Number: 10</p>
          </section>
        </section>
        <section class="member-card" id="2">
        <section id="card-name">
          <h2 id="name">harry</h2>
          </section>
          <section id="card-role">
          <section id="icons">
            <img src="../src/images/engineer.png" class="role-icon">
          </section>
          <h3 id="role">Engineer</h3>
          </section>
          <section id="card-info">
            <p>ID: 2</p>
            <p>Email: <a href="mailto:harry@yahoo.com">harry@yahoo.com</a></p>
            <p>Github: <a href="http://www.github.com/harry" target="_blank">http://www.github.com/harry</a></p>
          </section>
        </section>
        <section class="member-card" id="3">
        <section id="card-name">
          <h2 id="name">junior</h2>
          </section>
          <section id="card-role">
          <section id="icons">
            <img src="../src/images/intern.png" class="role-icon">
          </section>
            <h3 id="role">Intern</h3>
          </section>
          <section id="card-info">
            <p>ID: 3</p>
            <p>Email: <a href="mailto:junior@yahoo.com">junior@yahoo.com</a></p>
            <p>School: UWA</p>
          </section>
        </section>`
        expect(genMembers).toBe(compMembers.replaceAll(" ", ""));
    })
})

// Test getChildMember function for Manager
describe("getChildMember", () => {
    const expectedManager = {
        icon: '<img src="../src/images/manager.png" class="role-icon">', 
        option: "Office Number: 10"
    };

    const expectedEngineer = {
        icon: '<img src="../src/images/engineer.png" class="role-icon">', 
        option: `Github: <a href="http://www.github.com/harry" target="_blank">http://www.github.com/harry</a>`
    };

    const expectedIntern = {
        icon: '<img src="../src/images/intern.png" class="role-icon">', 
        option: "School: UWA"
    };

    it("Should return an object with icon manager and office number 10", () => {
        expect(render.getChildMember(manager)).toEqual(expectedManager);
        expect(render.getChildMember(engineer)).toEqual(expectedEngineer);
        expect(render.getChildMember(intern)).toEqual(expectedIntern);
    });
});