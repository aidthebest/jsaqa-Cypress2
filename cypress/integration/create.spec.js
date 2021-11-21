context("Create", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin/");
    cy.login();
  });

  it("Should create new hall", () => {
    cy.get(".conf-step__wrapper > :nth-child(3) > .conf-step__button").click();
    cy.get("form > .conf-step__label > .conf-step__input").type("topHall");
    cy.get("form > .conf-step__buttons > .conf-step__button-accent").click();
    cy.get(".conf-step__list > :nth-child(1)").should("be.visible");
  });

  it("Should create new film", () => {
    cy.get(".conf-step__paragraph > a > .conf-step__button").click();
    cy.get(".popup__form > :nth-child(1) > .conf-step__input").type("newFilm");
    cy.get(":nth-child(2) > .conf-step__input").type(190);
    cy.get(".popup__form > :nth-child(3) > .conf-step__input").type("trash");
    cy.get(":nth-child(4) > .conf-step__input").type("Poland");
    // cy.get('[value="Загрузить постер"]').click();
    const filepath = "images/85.png";
    cy.get('[value="Загрузить постер"]').attachFile(filepath);
    // cy.get("#file-submit").click();
    // cy.get("#uploaded-files").contains("85.png");

    cy.get('[value="Добавить фильм"]').click();
  });

  it("Should set ticket price", () => {});
});
