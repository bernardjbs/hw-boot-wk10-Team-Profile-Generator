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
            <h1>${team[0].name}'s team Profile</h1>
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

const generateMembers = (team) => {
  str = '';
  team.forEach(member => {
  let childMember = getChildMember(member);
  str = str + `
<section class="member-card" id="${member.id}">
  <h2>${member.role}</h2>
  <h2>${childMember.icon} ${member.name}</h2>
  <p>ID: ${member.id}</p>
  <p>Email: ${member.email}</p>
  <p>${childMember.option}</p>
</section>`;
  });
  return str;
}

const getChildMember = (member) => {
  const childMember = {};
  if (member.role === "Manager") {
    childMember.icon = `[Manager Icon]`;
    childMember.option = `Office Number: ${member.officeNumber}`;
  }
  else if (member.role === "Engineer") {
    childMember.icon = `[Engineer Icon]`;
    childMember.option = `Github: ${member.github}`;
  }
  else if (member.role === "Intern") {
    childMember.icon = `[Intern Icon]`;
    childMember.option = `School: ${member.school}`;
  };
  return childMember;
};

module.exports = { html, generateMembers, getChildMember};