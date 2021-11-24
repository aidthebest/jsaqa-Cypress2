// context("Create", () => {
//   beforeEach(() => {
//     cy.visit("http://qamid.tmweb.ru/admin/");
//     cy.login();
//   });

it("Should create new hall", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.get(".conf-step__wrapper > :nth-child(3) > .conf-step__button").click();
  cy.get("form > .conf-step__label > .conf-step__input").type("topHall");
  cy.get("form > .conf-step__buttons > .conf-step__button-accent").click();
  cy.get(".conf-step__list > :nth-child(1)").should("be.visible");
  const filepath = "85.png";
  cy.get('[value="Загрузить постер"]').attachFile(filepath);
  cy.get(".popup__form > :nth-child(1) > .conf-step__input").type("newFilm");
  cy.get(":nth-child(2) > .conf-step__input").type(190);
  cy.get(".popup__form > :nth-child(3) > .conf-step__input").type("trash");
  cy.get(":nth-child(4) > .conf-step__input").type("Poland");
  cy.get("form > .conf-step__buttons > :nth-child(2)").click();
  cy.get('[value="Добавить фильм"]').click();
  cy.contains("85").should("be.visible");
});
// });
