describe('Home', () => {

  beforeEach(() => {
    cy.interceptFetch()
  })

  it('should keep original url', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })
})