import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(/^The landing page fully loads$/, () => {
  cy.verifyPage(".panel-heading", "Menu List");
});

Then(/^I click Alert and modals on the Menu List$/, () => {
  cy.get("#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)")
    .should("exist")
    .and("be.visible")
    .click();
});

When(/^I click Bootstrap alerts$/, () => {
  cy.get(":nth-child(5) > ul > :nth-child(1) > a")
    .should("exist")
    .and("be.visible")
    .click();
});

When(/^I select Normal success message$/, () => {
  cy.get("#normal-btn-success").should("exist").and("be.visible").click();
});

Then(/^I confirm alert success message is displayed$/, () => {
  cy.get(".alert-normal-success")
    .invoke("text")
    .then((text) => {
      const actualText = text
        .trim()
        .replace(/^\s*×\s*/, "")
        .replace(/\s+/g, " ");
      const expectedText =
        "I'm a normal success message. To close use the appropriate button.";
      expect(actualText).to.contain(expectedText);
    });
});

When(/^I click close button$/, () => {
  cy.get(".alert-normal-success > .close")
    .should("exist")
    .and("be.visible")
    .click();
});

Then(/^The alert should close$/, () => {
  cy.get(".alert-normal-success").should("not.be.visible");
});

When(/^I click the autocloseable warning message$/, () => {
  cy.get("#autoclosable-btn-warning").should("be.visible").and("exist").click();
});

When(/^I confirm the alert is displayed$/, () => {
  cy.get(".alert-autocloseable-warning")
    .should("be.visible")
    .and(
      "contain.text",
      "I'm an autocloseable warning message. I will hide in 3 seconds."
    );
});

Then(/^I confirm that after 3 seconds the alert closes$/, () => {
  cy.get(".alert-autocloseable-warning").should("not.be.visible");
});
