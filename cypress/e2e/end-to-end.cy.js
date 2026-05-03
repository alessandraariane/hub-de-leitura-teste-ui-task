/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Fluxo End to End - Cadastro e Login no Hub de Leitura', () => {

  it('Deve cadastrar um usuário e realizar login com sucesso', () => {
    const usuario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      telefone: '11987654321',
      senha: 'Teste@123'
    }

    // Acessar cadastro
    cy.visit('/register.html')

    // Preencher cadastro
    cy.preencherCadastro(usuario)

    // Enviar cadastro
    cy.get('#register-btn').click()

    // Validar cadastro com sucesso
    cy.url().should('include', 'dashboard')

    // Acessar login
    cy.visit('/login.html')

    // Preencher login com usuário cadastrado
    cy.preencherLogin(usuario.email, usuario.senha)

    // Enviar login
    cy.get('#login-btn').click()

    // Validar login com sucesso
    cy.url().should('include', 'dashboard')
  })

})