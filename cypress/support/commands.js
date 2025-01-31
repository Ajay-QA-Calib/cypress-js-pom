// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
    cy.get('[id="username _input"]').click().type(username);
    cy.get('[id="sign-in-password _input"]').click().type(password);
    cy.get('[type="submit"]').click();
});
