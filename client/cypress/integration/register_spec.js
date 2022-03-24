describe("register", () => {
  it("user can register", () => {
    // current using the real db so this user wiill need to be removed from the db manually before this test runs
    cy.visit("/register");
    cy.get("[data-cy=name-input]").type("Cypress Honey");
    // cy.get("#name").type("Cypress Honey");
    // cy.get("#email").type("cypress2@gmail.com");
    cy.get("[data-cy=email-input]").type("cypress2@gmail.com");
    cy.get("[data-cy=password]").type("password1");
    cy.get("[data-cy=password-confirm]").type("password1");
    // cy.get(":nth-child(2) > .form-check > .form-check-label");
    // cy.get(".dropdown-toggle>").select(".Javascript");
    // cy.get(".dropdown-toggle>").select(".multiselect-languages-0");
    cy.get('[type="checkbox"]').check({ force: true });
    // cy.get(".form-check-input").check("Javascript");
    cy.get("[data-cy=bio-input]").type(
      "I want to improve my pyhton skills by pairing with others"
    );
    cy.get("[data-cy=github-input]").type(
      "https://github.com/hannahdesmond/pair-pro"
    );
    cy.get("[type=file]").attachFile("images/fixture.png");
    // cy.get('#uploaded-files').contains('Screenshot_2022-03-08_at_17.16.09-removebg-preview.png')

    cy.get('button[type="submit"]').should("be.visible").click();
  });

  it("it brings user to /pairprospage path", () => {
    cy.url().should("be.equal", "http://localhost:3000/pairpros");
  });
  it("after registration, user can see and click on logout button", () => {
    cy.contains("Logout").click();
  });
});
