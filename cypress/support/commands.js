<<<<<<< HEAD
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
=======
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
>>>>>>> 3ed86187b0a87597271ce94f27a87870560db7b8
