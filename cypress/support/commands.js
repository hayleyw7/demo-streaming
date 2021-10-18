Cypress.Commands.add('interceptFetch', () => {
  cy.visit('http://localhost:3000')
  .intercept('feed/sample.json', {
    fixture: 'test_data.json',
  })
})