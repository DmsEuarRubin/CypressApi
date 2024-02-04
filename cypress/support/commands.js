Cypress.Commands.add('createUser', (name, gender, email, status) => {
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
Cypress.Commands.add('getUser', (resID) => {
     cy.request({
         url: `/${resID}`,
         method: 'GET',
        headers: {
            "Authorization": Cypress.env("token")
        }
    })
})
Cypress.Commands.add('removeUser', (resID) => {
            cy.request({
                url: `/${resID}`,
                method: 'DELETE',
                headers: {
                    "Authorization": Cypress.env("token")
                }
            })
})
