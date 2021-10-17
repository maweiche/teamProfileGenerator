const Intern = require('../lib/Intern');

//create intern object
describe("Intern", () => {
    it('creates an Intern object using name, id, email, school', () => {
        const intern = new Intern('Matt', 30, 'maweiche@gmail.com', 'NCSU');

        expect(intern.school).toEqual(expect.any(String));
    })
});

//get school
describe("School", () => {
    it('gets employee school from getSchool', () => {
        const intern = new Intern('Matt', 30, 'maweiche@gmail.com', 'NCSU');

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    })
});

//gets role
describe("Role", () => {
    it('gets role of employee', () => {
        const intern = new Intern('Matt', 30, 'maweiche@gmail.com', 'NCSU');

        expect(intern.getRole()).toEqual("Intern");
    })
});



