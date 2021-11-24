Cypress.Commands.add("login", () => {
  cy.get('[for="email"] > .login__input').type("qamid@qamid.ru");
  cy.get('[for="pwd"] > .login__input').type("qamid");
  cy.get(".login__button").click();
});

require("@4tw/cypress-drag-drop");

import "cypress-file-upload";
