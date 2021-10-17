const Engineer = require('../lib/Engineer');

// create Engineer object
describe("Engineer", () => {
    it('creates an Engineer object', () => {
        const engineer = new Engineer ('Matt', 30, 'maweiche@gmail.com', 'maweiche');

        expect(engineer.github).toEqual(expect.any(String));
    })

//get github
    it('gets engineer github value from input', () => {
        const engineer = new Engineer('Matt', 30, 'maweiche@gmail.com', 'maweiche');

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });

    //get role
        it('gets role of Employee', () => {
            const engineer = new Engineer('Matt', 30, 'maweiche@gmail.com', 'maweiche');

            expect(engineer.getRole()).toEqual("Engineer");
        });

});