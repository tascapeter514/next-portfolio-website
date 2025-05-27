describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://next-portfolio-website-tau.vercel.app/')
  })

  it('allows users to enter in contact information', () => {


  //  cy.getByData("contact-form").scrollIntoView()

    cy.getByData("first-name-field").type('John')
    cy.getByData("last-name-field").type('Doe')
    // cy.getByData("email")
    // cy.getByData("email")
    // cy.getByData("email")
    // cy.get(`[data-test=first-name-field]`)

    // cy.getByData('test-input')

    // cy.get('[data-test=test-input]')

  })
})