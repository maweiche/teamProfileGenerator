const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee');

//creates employee object
TestWatcher('creates an employee object', () => {
    const employee = new Employee('Matt', 30, 'maweiche@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

