describe('login', () => {
  it('user can login', () => {
      cy.visit('/login');
      cy.get('#email').type('kb@gmail.com');
      cy.get('#password').type('password1');
      cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
  })
})