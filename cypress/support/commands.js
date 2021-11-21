Cypress.Commands.add("login", () => {
  cy.get('[for="email"] > .login__input').type("qamid@qamid.ru");
  cy.get('[for="pwd"] > .login__input').type("qamid");
  cy.get(".login__button").click();
});
