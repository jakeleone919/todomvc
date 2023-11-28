describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    //cy.get('#some_junk').click()
    cy.visit('https://www.cnn.com')
  })
})