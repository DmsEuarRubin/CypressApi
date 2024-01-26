describe('Gorest : API testing', () => {
    const randomDate = Date.now();
    it('Gorest | POST', () => {
    cy.fixture('UserInfo').then((data) => {
        let UserId;
        data.name = `VAR${randomDate}VAR`;
        data.email = `test${randomDate}@fakemail.am`;
        cy.log(data)
        cy.request({
            url: "/",
            method: 'POST',
            body: {
            "name": data.name, 
            "gender": data.gender, 
            "email": data.email, 
            "status": data.status
            },
            headers: {
                "Authorization": Cypress.env("token")
            }
        }).then(response => {
            UserId = response.body.id;
            cy.Myexpecting(response.body.name, `VAR${randomDate}VAR`);
            cy.Myexpecting(response.body.email, `test${randomDate}@fakemail.am`);
            cy.request({
                url: `/${response.body.id}`,
                method: 'GET',
                headers: {
                    "Authorization": Cypress.env("token")
                }
            })

        }).then(response => {
            cy.Myexpecting(response.body.id, UserId);
            cy.Myexpecting(response.body.name, `VAR${randomDate}VAR`);
            cy.Myexpecting(response.body.email, `test${randomDate}@fakemail.am`);
            cy.request({
                url: `/${response.body.id}`,
                method: 'DELETE',
                headers: {
                    "Authorization": Cypress.env("token")
                }
            })
        }).then(response => {
            expect(response.status).to.eq(204);
        })
    })
    })
});