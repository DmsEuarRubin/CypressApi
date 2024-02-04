describe('Gorest : API testing', () => {
    it('Gorest | API', () => {
        cy.fixture('userInfo').then((data) => {
            let userId;
            const randomDate = Date.now();
            data.name = `${randomDate}`;
            data.email = `test${randomDate}@fakemail.am`;
            cy.createUser(data.name, data.gender, data.email, data.status).then(response => {
                userId = response.body.id;
            cy.getUser(response.body.id, userId)}).then(response => {
                expect(response.body.id).to.eq(userId)
                expect(response.body.name).to.eq(`${randomDate}`);
                expect(response.body.email).to.eq(`test${randomDate}@fakemail.am`)
            cy.removeUser(response.body.id)}).then(response => {
                expect(response.status).to.eq(204)})
        })
    })
});
