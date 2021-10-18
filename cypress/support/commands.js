Cypress.Commands.add('loadHome', () => {
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('loadMovies', () => {
  cy.loadHome()
  cy.get('p[class="category-movies"]')
    .click()  
})

Cypress.Commands.add('loadSeries', () => {
  cy.loadHome()
  cy.get('p[class="category-series"]')
    .click()  
})