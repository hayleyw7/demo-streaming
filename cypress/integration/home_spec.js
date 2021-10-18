describe('Home', () => {

  beforeEach(() => {
    cy.loadHome()
  })

  it('should keep original url', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should render correct header', () => {
    cy.get('h1')
      .contains('DEMO')
    .get('button')
      .contains('Log')
    .get('button')
      .contains('trial')
    .get('h2')
      .contains('Titles')
  })

  it('should render tiles', () => {
    cy.get('article')
      .contains('SERIES')
    .get('article')
      .contains('MOVIES')
  })

  it('should render footer', () => {
    cy.get('p')
      .contains('Home')
    .get('p')
      .contains('2016')
  })  
})