describe('MyProfile', () => {
  it('when user is not logged in, user is redirected to login page', () => {
    cy.visit('/me');
    cy.url()
    .should('be.equal', 'http://localhost:3000/login');

})

it('when user is logged in, user can edit profile', () => {
  cy.visit('/login');
  cy.get('#email').type('kb@gmail.com');
  cy.get('#password').type('password1');
  cy.get('button[type="submit"]')
  .should('be.visible')
  .click()
  cy.contains('My Profile').click()
  cy.url()
  .should('be.equal', 'http://localhost:3000/me');  
})

})