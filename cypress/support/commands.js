Cypress.Commands.add('preencherCadastro', (usuario) => {
  cy.get('#name').type(usuario.nome)
  cy.get('#email').type(usuario.email)
  cy.get('#phone').type(usuario.telefone)
  cy.get('#password').type(usuario.senha)
  cy.get('#confirm-password').type(usuario.senha)
  cy.get('#terms-agreement').check()
})

Cypress.Commands.add('preencherLogin', (email, senha) => {
  cy.get('#email').type(email)
  cy.get('#password').type(senha)
})