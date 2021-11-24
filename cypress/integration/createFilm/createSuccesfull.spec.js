// context("createSuccesfull", () => {
//   beforeEach(() => {
//     cy.visit("http://qamid.tmweb.ru/admin/");
//     cy.login();
//   });

it.only("Should create new hall", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.contains("Создать зал").click();
  cy.get("form > .conf-step__label > .conf-step__input").type("top2Hall");
  cy.get("form > .conf-step__buttons > .conf-step__button-accent").click();
  cy.get('[value="top2Hall"]').click({ multiple: true });
  cy.get("#input_rows_count").clear().type(7);
  cy.get("#input_places_count").clear().type(5);
  cy.get(
    "#hall-configuration > .conf-step__wrapper > .conf-step__buttons > .conf-step__button-accent"
  ).click();
  cy.get("#input_price_standart").clear().type(400);
  cy.get("#input_price_vip").clear().type(700);
  cy.get(
    "#price-configuration > .conf-step__wrapper > .conf-step__buttons > .conf-step__button-accent"
  ).click();
  cy.contains("top2Hall").should("be.visible");
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  // const dataTransfer = new DataTransfer();
  // cy.get('[class="conf-step__movies"]')
  //   .contains("Фильм 1")
  //   .trigger("dragstart", {
  //     dataTransfer,
  //   });
  // cy.get('[data-hall-id="173"] > .conf-step__seances-timeline').trigger(
  //   "drop",
  //   { dataTransfer }
  // );
  // cy.get('[class="conf-step__movies"]').contains("Фильм 1").trigger("dragend");

  // cy.contains("Фильм 1").drag(
  //   '.data-hall-id="497" > .conf-step__seances-timeline'
  // );
  // Cypress.on("uncaught:exception", () => {
  //   return false;
  // });
  // cy.wait(1000);
  // cy.get('[for="name"] > .conf-step__input')
  //   .clear()
  //   .type(12 - 30);

  // cy.get('[class="conf-step__seances-timeline"]').contains("top2Hall").click();
  // cy.get('[data-hall-name="top2Hall"]').click();
  // cy.get("form > .conf-step__buttons > .conf-step__button-accent").click();
  // const hall = "top2Hall";
  // cy.contains('[class="conf-step__selector"]', hall).click({
  //   force: true,
  // });

  // cy.contains("#price-configuration > .conf-step__wrapper", "top2Hall")
  //   .contains(hall)
  //   .click({
  //     force: true,
  //   });

  // cy.contains('#start-sales > [style="display: block;"]', hall)
  //   .contains(hall)
  //   .click({
  //     force: true,
  //   });
});
