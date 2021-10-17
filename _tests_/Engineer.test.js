const Employee = require('./lib/Engineer');

// create Engineer object
describe("Engineer", () => {
    it('creates an Engineer object from name, id, email, github', () => {

        expect(engineer.github).toEqual(expect.any(String));
    })
});

//get github
describe("github", () => {
    it('gets engineer github value from input', () => {
        const engineer = new Engineer('Matt', 30, 'maweiche@gmail.com', 'maweiche');

        expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });

    //get role
    describe("get role", () => {
        it('gets role of Employee', () => {
            const engineer = new Engineer('Matt', 30, 'maweiche@gmail.com', 'maweiche');

            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
});