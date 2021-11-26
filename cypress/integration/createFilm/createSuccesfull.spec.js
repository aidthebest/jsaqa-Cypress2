// context("createSuccesfull", () => {
//   beforeEach(() => {
//     cy.visit("http://qamid.tmweb.ru/admin/");
//     cy.login();
//   });

it.only("Should create new hall", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  const selector = require("../../fixtures/selectors.json");
  const seats = require("../../fixtures/seats.json");
  const prices = require("../../fixtures/prices.json");
  const testData = require("../../fixtures/testData.json");

  cy.contains("Создать зал").click();
  cy.get(selector.hallNameField).type(testData.newHallallName);
  cy.get(selector.confHallButton).click();
  cy.get('[value="top2Hall"]').click({ multiple: true });
  seats.forEach((seat) => {
    cy.get("#input_rows_count").clear().type(seat.rows);
    cy.get("#input_places_count").clear().type(seat.seats);
  });
  cy.get(selector.hallConfConfirmButton).click();
  prices.forEach((price) => {
    cy.get("#input_price_standart").clear().type(price.standart);
    cy.get("#input_price_vip").clear().type(price.vip);
  });
  cy.get(selector.priceConfConfirmButton).click();
  cy.contains("top2Hall").should("be.visible");
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  cy.get(
    '[draggable="true"][data-film-id="80"] > .conf-step__movie-title'
  ).drag('[data-hall-id="173"] > .conf-step__seances-timeline');

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

  // cy.contains('#start-sales > [style="display: block;"]', hall)
  //   .contains(hall)
  //   .click({
  //     force: true,
  //   });
});
