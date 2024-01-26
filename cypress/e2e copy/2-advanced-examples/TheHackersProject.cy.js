describe("MY HEADER", () => {

    it('My visit page and click', () => {

        cy.visit('https://demoqa.com/');
        cy.get("div[class='card mt-4 top-card']:first-child").click();
        cy.get("ul[class='menu-list']").first().children("li[id='item-4']").click();
        cy.get('button[id="doubleClickBtn"]').dblclick();
        cy.get('button[id="rightClickBtn"]').rightclick();
        cy.get("ul[class='menu-list']").first().children("li[id='item-0']").click();
        cy.get("input[placeholder='Full Name']").type('DmsEuar DeusFoscor');
        cy.get("input[placeholder='name@example.com']").type("DmsEuar777@gmail.com");
        cy.get("textarea[placeholder='Current Address']").type("I LOVE CYPRESS, YOU LOVE CYPRESS TOO. NO? YOU WANNA DIE? I KILL YOU MAN. TELL ME DO YOU LOVE CYPRESS TEEEEEEELLLLLL MEEEEEEEEEEEEE.");
        cy.get("textarea[id='permanentAddress']").type("I LOVE CYPRESS, YOU LOVE CYPRESS TOO. NO? YOU WANNA DIE? I KILL YOU MAN. TELL ME DO YOU LOVE CYPRESS TEEEEEEELLLLLL MEEEEEEEEEEEEE.");
        cy.get("button[id='submit']").click();
        

        

    })
    

})
