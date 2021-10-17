const Manager = require('../lib/Manager');

//create Manager object
describe("Manager", () =>{
    it('creates a Manager object with name, id, email and office number', () => {
        const manager = new Manager('Matt', 30, 'maweiche@gmail.com', 2);

        expect(manager.officeNumber).toEqual(expect.any(Number));
    })
})

//get role
describe("Role", () =>{
    it('gets Role of employee', () => {
        const manager = new Manager('Matt', 30, 'maweiche@gmail.com', 2);

        expect(manager.getRole()).toEqual("Manager");
    })
});
