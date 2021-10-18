describe('Series', () => {

  beforeEach(() => {
    cy.loadSeries()
  })

  it('should have series url', () => {
    cy.url().should('eq', 'http://localhost:3000/series')
  })

  it('should render correct header', () => {
    cy.get('h1')
      .contains('DEMO')
    .get('button')
      .contains('Log')
    .get('button')
      .contains('trial')
    .get('h2')
      .contains('Series')      
  })

  it('should render footer', () => {
    cy.get('p')
      .contains('Home')
    .get('p')
      .contains('2016')
  })  

  it('should render series titles', () => {
    cy.get('h3')
      .contains('Billions')
    .get('h3')
      .contains('Power')
  })

  it('should render posters', () => {
    cy.wait(1000)
    .get('img[class="icon"]')
      .should('be.visible')
  })    

   it('should not render movies', () => {
    cy.get('h3')
      .should('not.contain', 'Tracers')
  }) 

})