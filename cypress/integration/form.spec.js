describe('Form', () => {
  it('should validate ', () => {
    cy.visit('http://localhost:3005');
    cy.get('input[name="aporte"]').type('44r');
    cy.get('input[name="prazo"]').type('44r');
    cy.get('input[name="aporte_mensal"]').type('44r');
    cy.get('input[name="rentabilidade"]').type('44r');
    cy.get('input[name="cdi"]').type('44r');
    cy.get('#simulador-btn').click();
    cy.get('#form-result').should('not.exist');
    cy.contains('Por favor, verifique todos os campos.').should('exist');
  });
});
