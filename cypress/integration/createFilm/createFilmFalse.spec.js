// context("Create", () => {
//   beforeEach(() => {
//     cy.visit("http://qamid.tmweb.ru/admin/");
//     cy.login();
//   });

it("Should create new hall", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.contains("Создать зал").click();
  cy.get("form > .conf-step__label > .conf-step__input").type("top2Hall");
  cy.get("form > .conf-step__buttons > .conf-step__button-accent").click();
  cy.get('[value="top2Hall"]').click({ multiple: true });
  cy.get("#input_rows_count").clear().type(7);
  cy.get("#input_places_count").clear().type(5);
  cy.get("#input_price_standart").clear().type(400);
  cy.get("#input_price_vip").clear().type(700);
  cy.get(".conf-step__paragraph > a > .conf-step__button").click();
  cy.get(".popup__form > :nth-child(1) > .conf-step__input").type("newFilm");
  cy.get(":nth-child(2) > .conf-step__input").type(190);
  cy.get(".popup__form > :nth-child(3) > .conf-step__input").type("trash");
  cy.get(":nth-child(4) > .conf-step__input").type("Poland");
  cy.get("form > .conf-step__buttons > :nth-child(2)").click();
  const filepath = "85.png";
  cy.get('[value="Загрузить постер"]').attachFile(filepath);
  cy.get('[value="Добавить фильм"]').click();
  cy.get(".conf-step__list > :nth-child(1)").should("be.visible");
  cy.contains("85").should("be.visible");
});
// });
