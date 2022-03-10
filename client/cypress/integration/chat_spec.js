describe("Chat Page", () => {
  it("when user is not logged in, user is redirected to login page", () => {
    cy.visit("/chat");
    cy.url().should("be.equal", "http://localhost:3000/login");
  });

  it("when user is logged in, user can chat with others", () => {
    cy.visit("/login");
    cy.get("#email").type("silvia@test.com");
    cy.get("#password").type("password1");
    cy.get("[data-testid=add-btn]").should("be.visible").click();
    cy.contains("Chat to Harry").click();
    cy.url().should("include", `http://localhost:3000/chat/`);
    cy.get("#messageinputfield").type("Hi");
    cy.get('button[type="submit"]').click();
    //   cy.get('.message-display').contains('Hi')
    // cy.get('[data-cy=message-display]').contains('Hi')

    // cy.get('.message-display').each(($el, index) => {
    //   expect($el).to.contain('Hi')
    // })
    //cy.get('Message').last().contains('Hi')
    // cy.get('.message-display').last().contains('Hi')
  });

  //  it('when user on chatpage, user can chat select a different conversation', () => {
  //     // cy.get('conversation').first().click();
  //     cy.get('#messageinputfield').type('Hi');
  //     cy.get('button[type="submit"]').click();
  //  })
});
