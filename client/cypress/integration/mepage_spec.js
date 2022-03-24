describe("MyProfile", () => {
  it("when user is not logged in, user is redirected to login page", () => {
    cy.visit("/me");
    cy.url().should("be.equal", "http://localhost:3000/login");
  });

  it("when user is logged in, user can edit profile", () => {
    cy.visit("/login");
    cy.get("#email").type("silvia@test.com");
    cy.get("#password").type("password1");
    cy.get("[data-testid=add-btn]").should("be.visible").click();
    cy.contains("My Profile").click();
    cy.url().should("be.equal", "http://localhost:3000/me");
    cy.get("h2").should("have.text", "Nice profile, Silvia!");
    cy.get("[data-cy=edit-btn]").should("have.text", "Edit your Profile");
  });
  
  it("user profile has link to github", () => {
    cy.get("[data-cy=github-link]").click();
  });
});
