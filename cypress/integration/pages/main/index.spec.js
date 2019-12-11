// describe('button', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });
// });
describe('My First Test', function() {
  it('clicks the link "type"', function() {
    cy.visit('/');
    cy.get('.button').click();
    cy.get('.button').click();
    cy.get('.result').should('contain', '2')
  })
});
