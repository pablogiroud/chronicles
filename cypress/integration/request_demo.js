describe('Request Demo', () => {
  beforeEach(() => {
    cy.visit('https://www.chronicled.com/')
    cy.server()
    cy.fixture('pi.json').as('pi').then((pi) => {
        cy.route('GET', 'pi.json', pi)
    })
    cy.contains('Request Demo').click()
    cy.url().should('include', '/request-demo')
    cy.contains('Request a demonstration of any one of our products through the form below')

  })
    
    it('newsletter', function (){
         cy.get('[id="Email---Newsletter"]').click()
          .type(this.pi.email)
    })

    it('complete the Request Demo Fields', function () {
        cy.get('[id="name"]').click()
          .type(this.pi.name)
        cy.get('[id="Email"]').click()
          .type(this.pi.email)
        cy.get('[id="Phone"]').click()
          .type(this.pi.phone)
        cy.get('[id="Position"]').click()
          .type(this.pi.position)
        cy.get('[id="Company"]').click()
          .type(this.pi.Company)
        cy.get('[id="Company-Type"]').select(this.pi.companyType)
        cy.get('[id="Product-2"]').select(this.pi.interested)
        cy.get('[id="Message"]').click()
          .type(this.pi.textBox)
    })
})