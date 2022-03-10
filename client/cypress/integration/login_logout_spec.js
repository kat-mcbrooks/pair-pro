describe("login", () => {
  // it('displays toast error notification if user enters invalid credentials', () => {
  //   cy.visit('/login');
  //   cy.get('#email').type('kb@gmail.com');
  //   cy.get('#password').type('password2');
  //   cy.get('button[type="submit"]')
  //   .click();
  //   cy.get("notification").should('contain', "incorrect email or password")
  // })

  it("user can login", () => {
    cy.visit("/login");
    cy.get("#email").type("silvia@test.com");
    cy.get("#password").type("password1");
    cy.get("[data-testid=add-btn]").should("be.visible").click();
  });

  it("brings user to /prospage path", () => {
    cy.url().should("be.equal", "http://localhost:3000/pairpros");
  });

  it("user can logout", () => {
    cy.contains("Logout").click();
  });
});
