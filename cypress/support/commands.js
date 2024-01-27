Cypress.Commands.add('creation', (name, gender, email, status) => {
    cy.request({
        url: "/",
        method: 'POST',
        body: {
        "name": name, 
        "gender": gender, 
        "email": email, 
        "status": status
        },
        headers: {
            "Authorization": Cypress.env("token")
        }
    })
})
Cypress.Commands.add('getting', (randomDate, response, ID) => {
    ID = response.body.id;
     expect(response.body.name).to.eq(`VAR${randomDate}VAR`);
     expect(response.body.email).to.eq(`test${randomDate}@fakemail.am`);
     cy.request({
         url: `/${response.body.id}`,
         method: 'GET',
        headers: {
            "Authorization": Cypress.env("token")
        }
    })
})
Cypress.Commands.add('deleteing', (randomDate, response, ID) => {
    expect(response.body.id, ID);
            expect(response.body.name).to.eq(`VAR${randomDate}VAR`);
            expect(response.body.email).to.eq(`test${randomDate}@fakemail.am`);
            cy.request({
                url: `/${response.body.id}`,
                method: 'DELETE',
                headers: {
                    "Authorization": Cypress.env("token")
                }
            })
})
