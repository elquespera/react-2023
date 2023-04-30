describe('Navigation', () => {
  it('Should open home page', () => {
    cy.visit('/');
    cy.contains('h2', 'Home');
  });

  it('Not found route', () => {
    cy.visit('/random-route');
    cy.contains('h2', '404');
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

describe('Search', () => {
  it('Search should work', () => {
    cy.visit('/');
    cy.get(`input[placeholder="Search by name"`).type('Luxury');
    cy.get('form[data-testid="search-bar-form"]').submit();
    cy.contains('Luxury Villa');
  });

  it('Search should be empty when nothing is found', () => {
    cy.visit('/');
    cy.get(`input[placeholder="Search by name"`).type('bla bla bla');
    cy.get('form[data-testid="search-bar-form"]').submit();
    cy.get('main ul>li').should('not.exist');
    cy.contains('div', 'No properties were found for your request');
  });
});

describe('Modal', () => {
  it('Modal should open', () => {
    cy.visit('/');
    cy.get(`main ul>li`).first().click();
    cy.contains('h2', 'Luxury Villa');
  });

  it('Modal should close on button click', () => {
    cy.visit('/');
    cy.get(`main ul>li`).first().click();
    cy.get(`div[data-testid="modal-portal"] button`).click();

    cy.get(`div[data-testid="modal-portal"]`).should('not.exist');
  });

  it('Modal should close on escape key press', () => {
    cy.visit('/');
    cy.get(`main ul>li`).first().click();
    cy.get(`div[data-testid="modal-portal"]`).type('{esc}');
    cy.get(`div[data-testid="modal-portal"]`).should('not.exist');
  });
});

describe('Add Property form', () => {
  it('Adding property should work', () => {
    cy.visit('/add-property');
    cy.get(`input[id="title"]`).type('Amazing house');
    cy.get(`input[id="address"]`).type('Some street');
    cy.get(`input[id="price"]`).type('300');
    cy.get(`select[name="rooms"]`).select('3');
    cy.get(`input[id="availableFrom"]`).type('2026-10-10');
    cy.get(`input[name="purpose"]`).check();
    cy.get(`input[name="agree"]`).check();

    cy.get(`form`).submit();
    cy.contains('h3', 'Amazing house');
    cy.contains('div', 'Your property was added successfully!');
  });

  it('End tests', () => {
    expect(true).to.equal(true);
  });
});
