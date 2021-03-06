// Constants
const managerIcon = "../src/images/manager.png"
const engineerIcon = "../src/images/engineer.png"
const internIcon = "../src/images/intern.png"

// Function to render HTML
const html = (team) => {
  const renderHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/reset.css">
    <link rel="stylesheet" href="../dist/style.css">
    <title>Manager's Team Profile</title>
</head>
<body>
    <section id = "app">
        <section id="heading">
            <h1>${team[0].name}'s Team Profile</h1>
        </section>
        <section id="team">
          ${generateMembers(team)}

        </section>    
    </section>
</body>
</html>
`
  return renderHtml;
}

// Function to generate team members and add them to HTML
const generateMembers = (team) => {
  str = '';
  team.forEach(member => {
    let childMember = getChildMember(member);
    str = str+`
<section class="member-card" id="${member.id}">
<section id="card-name">
  <h2 id="name">${member.name}</h2>
  </section>
  <section id="card-role">
  <section id="icons">
    ${childMember.icon}
  </section>
    <h3 id="role">${member.role}</h3>
  </section>
  <section id="card-info">
    <p>ID: ${member.id}</p>
    <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
    <p>${childMember.option}</p>
  </section>
</section>`;
  });
  return str;
}

// Function to get the "Option" function from Manager, Engineer and Intern objects
const getChildMember = (member) => {
  const childMember = {};
  if (member.role === "Manager") {
    childMember.icon = `<img src="${managerIcon}" class="role-icon">`;
    childMember.option = `Office Number: ${member.officeNumber}`;
  }
  else if (member.role === "Engineer") {
    childMember.icon = `<img src="${engineerIcon}" class="role-icon">`;
    childMember.option = `Github: <a href="${member.github}" target="_blank">${member.github}</a>`;
  }
  else if (member.role === "Intern") {
    childMember.icon = `<img src="${internIcon}" class="role-icon">`;
    childMember.option = `School: ${member.school}`;
  };
  return childMember;
};

module.exports = { html, generateMembers, getChildMember };