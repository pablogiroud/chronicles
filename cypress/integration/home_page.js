const { cyan } = require("color-name")

describe('Home page', () => {
  it('Chronicle Home Page', () => {
    cy.visit('https://www.chronicled.com/')

    cy.contains('Request Demo')
    cy.contains('Register')
    cy.contains('© Chronicled 2020')
    cy.contains('Join the future healthcare today')
    cy.contains('a', 'Request Demo')
  })
})