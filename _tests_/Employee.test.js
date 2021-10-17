const Employee = require('../lib/Employee');

//creates employee object
describe("Employee Object", () =>{
it('creates an employee object from name, id, email', () => {
    const employee = new Employee('Matt', 30, 'maweiche@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//get id
it('captures Employee ID input', () => {
    const employee = new Employee('Matt', 30, 'maweiche@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//get email
it('captures Employee email input', () => {
    const employee = new Employee('Matt', 30, 'maweiche@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//get role
it('captures role of Employee input', () => {
    const employee = new Employee('Matt', 30, 'maweiche@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});
});