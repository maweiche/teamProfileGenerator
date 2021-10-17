//import Employee constructor
const Employee = require("./Employee");

//engineer extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //super calls employee constructor
        super(name, id, email);

        this.github = github;
    }

    //return github
    getGithub () {
        return this.github;
    }

    //override employee role to engineer
    getRole() {
        return "Engineer";
    }
};

//export
module.exports = Engineer;