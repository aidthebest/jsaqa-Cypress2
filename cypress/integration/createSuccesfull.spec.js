// context("createSuccesfull", () => {
//   beforeEach(() => {
//     cy.visit("http://qamid.tmweb.ru/admin/");
//     cy.login();
//   });

it("Should create new hall", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.get(".conf-step__wrapper > :nth-child(3) > .conf-step__button").click();
  cy.get("form > .conf-step__label > .conf-step__input").type("top2Hall");
  cy.get("form > .conf-step__buttons > .conf-step__button-accent").click();
  cy.contains("top2Hall").should("be.visible");
  const hall = "top2Hall";
  cy.contains('[class="conf-step__selector"]', hall).click({
    force: true,
  });

  cy.contains("#price-configuration > .conf-step__wrapper", "top2Hall")
    .contains(hall)
    .click({
      force: true,
    });

  cy.contains('#start-sales > [style="display: block;"]', hall)
    .contains(hall)
    .click({
      force: true,
    });
});
it("Should set ticket price", () => {});
// });
