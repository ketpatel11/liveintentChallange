describe('GetStarted and Contact Us', function () {
  it('Verify Get Started button, Url and Contact Us Button', function () {
    // go to home page
    cy.visit('/');
    // Alias getStarted Button
    cy.get('.white-border-btn').as('getStartedButton');
    // Verify the "GetStarted" button is visible, contain text "Get Started" and click
    cy.get('@getStartedButton')
      .should('have.attr', 'href', '/get-in-touch/')
      .should('be.visible')
      .should('contain', 'Get Started')
      .click();
    // Verify that the new location is "/get-in-touch/""
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/get-in-touch/');
    });
    // Alias Contact US Button
    cy.get('button[type=submit]').as('contactUs');
    // Verify the presence of "contact Us" Button
    cy.get('@contactUs').should('be.visible').should('contain', 'Contact Us');
  });
});
