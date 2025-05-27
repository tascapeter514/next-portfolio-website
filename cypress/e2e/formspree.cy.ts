describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://next-portfolio-website-tau.vercel.app/')
  })

  it('allows users to enter in contact information', () => {

    cy.getByData("first-name-field").type('John')
    cy.getByData("last-name-field").type('Doe')
    cy.getByData("email-field").type('johnDoe@gmail.com')
    cy.getByData("subject-field").type('In need of a developer')
    cy.getByData("message-field").type("Hi, I'm John Doe and I am in need of a developer. Could you help me?")

  })

  it('should display a success message when submit is clicked', () => {
    cy.getByData("email-field").type('johnDoe@gmail.com')
    cy.getByData("contact-button").click()
    cy.getByData('success-message').should("exist").contains('success')
  })

  it ('does not allow an invalid email address', () => {
    cy.getByData("email-field").type("tom")
    cy.getByData("contact-button").click()
    cy.getByData("success-message").should("not.exist")
    cy.getByData("error-message").should("exist").contains('invalid')
  })

  it('should submit to formspree api and receive a success message', () => {

    cy.getByData("first-name-field").type('John')
    cy.getByData("last-name-field").type('Doe')
    cy.getByData("email-field").type('johnDoe@gmail.com')
    cy.getByData("subject-field").type('In need of a developer')
    cy.getByData("message-field").type("Hi, I'm John Doe and I am in need of a developer. Could you help me?")

    cy.intercept('POST', 'https://formspree.io/your-form-endpoint', { fixture: 'formspree_success_response.json' });

    cy.getByData('contact-button').click()

    cy.getByData('contact-form').submit()

    // Wait for the mock request
    cy.wait('@formSubmit')

    // Check for your success message
    cy.contains('Thank you for your message').should('be.visible')

  })
})