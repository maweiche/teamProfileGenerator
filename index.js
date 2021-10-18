//link to HTML generator file
const generaterHTML = require('./generateHTML');
//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
//node 
const fs = require('fs');
const inquirer = require('inquirer');
//team set
const team = [];


//manager prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Who is the team manager?",
            validate: nameInput=> {
                if (nameInput) {
                    return true;
                }else{
                    console.log("Enter the team manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's ID number.");
                    return false;
                }else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number."
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager);
        console.log(manager);
    })
}


//start of team prompt
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else{
                    console.log("Please enter a name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the ID number.");
                    return false;
                }else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email."
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's Github username."
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school."
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Add more team members?",
            default: false
        }
    ])
}
addManager();
addEmployee();
console.log(team);
