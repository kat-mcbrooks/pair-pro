describe('register', () => {
    it('user can register', () => {
        cy.visit('/register');
      cy.get('#name').type('Cypress Honey');
      cy.get('#email').type('cypress4@gmail.com');
      cy.get('#password').type('password1');
      cy.get('#password2').type('password1');
      cy.get('#languages').type('python, javascript, typscript');
      cy.get('#bio').type('I want to improve my pyhton skills by pairing with others');
      cy.get('[type=file]')
      .attachFile('images/fixture.png');

      // cy.get('#file-upload').selectFile('cypress/fixtures/images/Screenshot_2022-03-08_at_17.16.09-removebg-preview.png')
      // cy.get('#file-submit').click()
      // cy.get('#uploaded-files').contains('Screenshot_2022-03-08_at_17.16.09-removebg-preview.png')

      cy.get('button[type="submit"]')
      .should('be.visible')
      .click()      
    })

    it('it brings user to /pairprospage path', () => {
      cy.url()
      .should('be.equal', 'http://localhost:3000/pairpros');
    })
    it('after registration, user can see and click on logout button', () => {
      cy.contains('Logout').click()
    })
})