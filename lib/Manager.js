//import Employee constructor
const Employee = require('./Employee');

//manager extends employee constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super calls on employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    //override employee role
    getRole() {
        return "Manager";
    }
};

//export
module.exports = Manager;