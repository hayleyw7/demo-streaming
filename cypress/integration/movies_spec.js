describe('Movies', () => {

  beforeEach(() => {
    cy.loadMovies()
  })

  it('should have movies url', () => {
    cy.url().should('eq', 'http://localhost:3000/movies')
  })

  it('should render correct header', () => {
    cy.get('h1')
      .contains('DEMO')
    .get('button')
      .contains('Log')
    .get('button')
      .contains('trial')
    .get('h2')
      .contains('Movies')
  })

  it('should render footer', () => {
    cy.get('p')
      .contains('Home')
    .get('p')
      .contains('2016')
  })  
  
  it('should render movie titles', () => {
    cy.get('h3')
      .contains('Prisoners')
    .get('h3')
      .contains('Tracers')
  })

  it('should render posters', () => {
    cy.wait(1000)
    .get('img[class="icon"]')
      .should('be.visible')
  })    

   it('should not render series', () => {
    cy.get('h3')
      .should('not.contain', 'Billions')
  })   
})