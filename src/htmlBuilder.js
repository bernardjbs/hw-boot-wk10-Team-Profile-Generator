// const getNestedObject = (nestedObj, pathArr) => {
//     return pathArr.reduce((obj, key) =>
//         (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
// }


const buildTeam = (data) => {
    console.log(data);

if(data.role == "Manager") {

}
    
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile for ${data[0].managerName}</title>
</head>
<body>
    
</body>
</html>

`
}

module.exports = { buildTeam }