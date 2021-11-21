it("Should show correct main page", () => {
  cy.visit("http://qamid.tmweb.ru/client/index.php");
  cy.get(".page-header__title").should("be.visible");
});

it("Should show correct main page", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.get("#hall-control > .conf-step__header > .conf-step__title").should(
    "be.visible"
  );
});

it("Should create new hall", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.get(".conf-step__wrapper > :nth-child(3) > .conf-step__button").click();
  cy.get("form > .conf-step__label > .conf-step__input").type("newHall");
});

it("Should create new film", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.get(".conf-step__paragraph > a > .conf-step__button").click();
  cy.get(".popup__form > :nth-child(1) > .conf-step__input").type("newFilm");
  cy.get(":nth-child(2) > .conf-step__input").type(190);
  cy.get(".popup__form > :nth-child(3) > .conf-step__input").type("trash");
  cy.get(":nth-child(4) > .conf-step__input").type("Poland");
});
