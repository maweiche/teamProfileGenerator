//Manager
const generateManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
            <h3>${manager.name}</h3>
            <span class="material-icons">work</span><h4>Manager</h4>
            </div>
            <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};
//Engineer
const generateEngineer = function(engineer) {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
            <h3>${engineer.name}</h3>
            <span class="material-icons">laptop</span><h4>Engineer</h4>
            </div>
            <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};
//Intern
const generateIntern = function (intern) {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
            <h3>${intern.name}</h3>
            <span class="material-icons">free_breakfast</span><h4>Intern</h4>
            </div>
            <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
}
// //push to page
generateHTML = (data) => {
    //array for cards
    pageArray = [];

    for(let i = 0; i <data.length; i++) {
        const employee= data[i];
        const role = employee.getRole();

        //call manager
        if( role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        //call engineer
        if(role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
        //call intern
        if(role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }
    //join all of the strings together
    const employeeCards = pageArray.join('')
    //return to page
    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}

//create template for html
const generatePage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Team Profile Page" content="Generated Team Profile Page" />
        <title>MW's Portfolio</title>
        <link rel="stylesheet" href="assets/reset.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./style.css"/>
    </head>

    <body>

        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
            </nav>
        </header>
        
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
                </div>
            </div>
        </main>

    </body>
    <script type=“text/javascript” src=“https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js”></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    </html>
    `;
}

// //export
module.exports = generateHTML;