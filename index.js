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
                    console.log("Please enter a name.")
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
                    console.log("Please enter the ID number.")
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

