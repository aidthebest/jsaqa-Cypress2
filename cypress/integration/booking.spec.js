it("Should show correct main page", () => {
  cy.visit("http://qamid.tmweb.ru/client/index.php");
  cy.get(".page-header__title").should("be.visible");
});

it("Should show correct admin panel page", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  cy.contains("Управление").should("be.visible");
});
