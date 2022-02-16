describe('Home Page', () => {
  it('should show the result ', () => {
    cy.visit('http://localhost:3005');
    cy.get('input[name="aporte"]').type('44');
    cy.get('input[name="prazo"]').type('44');
    cy.get('input[name="aporte_mensal"]').type('44');
    cy.get('input[name="rentabilidade"]').type('44');
    cy.get('input[name="cdi"]').type('44');
    cy.get('#simulador-btn').click();
    cy.get('#form-result article').should('have.length', 6);
  });
});
