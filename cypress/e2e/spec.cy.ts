describe('Open Pages', () => {
  it('Should open home page', () => {
    cy.visit('/');
    cy.contains('h2', 'Home');
    // cy.get(`input[placeholder="Search by name"`);
  });

  it('About Us Link should work', () => {
    cy.visit('/');
    cy.contains('h2', 'Home');
    cy.get(`a[href="/about-us"]`).click();
    cy.contains('h2', 'About Us');
  });

  it('Add Property Link should work', () => {
    cy.visit('/');
    cy.contains('h2', 'Home');
    cy.get(`a[href="/add-property"]`).click();
    cy.contains('h2', 'Add Property');
  });
});
