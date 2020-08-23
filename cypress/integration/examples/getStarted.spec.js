describe('GetStarted and Contact Us', function() {
     
    it('Verify Get Started button, Url and Contact Us Button', function() {
      cy.visit('/');
      cy.get('.white-border-btn').as('getStartedButton')
      cy.get('@getStartedButton')
        .should('have.attr', 'href', '/get-in-touch/')
        .should('be.visible')
        .should('contain', 'Get Started').click()
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/get-in-touch/')
            })

      cy.get('.header-cta-nav').as('contactUs')   
      cy.get('@contactUs')
        .should('have.attr', 'href', '/get-in-touch') 
        .should('be.visible')
        .should('contain', 'Contact Us') 
    })
  })