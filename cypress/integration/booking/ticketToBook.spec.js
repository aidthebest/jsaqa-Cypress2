it("Should enter new tickets price", () => {
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.login();
  cy.get('[value="top2Hall"]').click({ multiple: true });
  cy.get("#input_price_standart").clear().type(400);
  cy.get("#input_price_vip").clear().type(700);
  cy.get(
    "#price-configuration > .conf-step__wrapper > .conf-step__buttons > .conf-step__button-accent"
  ).click();
  //   cy.contains(400).should("be.visible");
});
