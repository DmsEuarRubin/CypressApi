describe('Gorest : API testing', () => {
    it('Gorest | API', () => {
        cy.fixture('UserInfo').then((data) => {
            let UserId;
            const randomDate = Date.now();
            data.name = `VAR${randomDate}VAR`;
            data.email = `test${randomDate}@fakemail.am`;
            cy.creation(data.name,data.gender,data.email,data.status).then(response => {
            cy.getting(randomDate, response, UserId)}).then(response => {
            cy.deleteing(randomDate, response, UserId)}).then(response => {
            expect(response.status).to.eq(204)})
        })
    })
});
