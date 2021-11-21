it("Should show correct main page", () => {
  cy.visit("http://qamid.tmweb.ru/client/index.php");
  cy.get(".page-header__title").should("be.visible");
});

it("Should show correct admin panel page", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.get("#hall-control > .conf-step__header > .conf-step__title").should(
    "be.visible"
  );
});
