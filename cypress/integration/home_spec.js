describe('Home', () => {

  beforeEach(() => {
    cy.interceptFetch()
  })

  it('should keep original url', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should render header', () => {
    cy.get('h1')
      .contains('DEMO')
    .get('button')
      .contains('Log')
    .get('button')
      .contains('trial')
  })

  it('should render cards', () => {
    cy.get('h1')
      .contains('DEMO')
    .get('button')
      .contains('Log')
    .get('button')
      .contains('trial')
  })
})