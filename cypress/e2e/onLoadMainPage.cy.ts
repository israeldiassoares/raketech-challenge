// https://docs.cypress.io/api/introduction/api.html

describe('Index with cards', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('header').contains('nav', 'Home')
    cy.get('main').contains('header', 'filter by', { matchCase: false })
    cy.get('#hero-card-list').find('.hero-card')
      .should(($heroCard) => {
        expect($heroCard).to.have.length(20)
      })
    cy.get('footer').contains('Israel Soares')
  })
})

describe('switch page Theme', () => {
  it('clicked on switch theme mode', () => {
    cy.visit('/')
    cy.get('html').should('not.have.class', 'dark')
    cy.get('[type="checkbox"]')
      .should('not.be.checked')
      .check({ force: true })
      .should('be.checked')
    cy.get('html').should('have.class', 'dark')
    cy.get('[type="checkbox"]')
      .click({ force: true })
      .should('not.be.checked')
      .get('html').should('not.have.class', 'dark')
  })
})