describe('TodoMVC', function() {
  beforeEach(function() {
    // Load our app before starting each test case
    cy.visit('https://www.google.com/')
  })

  it('case 1', function() {
    cy.percySnapshot('Home Page')
    cy.percySnapshot('Homepage responsive test', { widths: [768, 992, 1200] });

  })

 
})
