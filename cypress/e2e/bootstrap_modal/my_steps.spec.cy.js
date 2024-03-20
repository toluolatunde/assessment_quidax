import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(/^The landing page fully loads$/, () => {
  cy.verifyPage(".panel-heading", "Menu List");
});

Then(/^I click Alerts and modals on the Menu List$/, () => {
  cy.get("#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)")
    .should("exist")
    .and("be.visible")
    .click();
});

When(/^I click Bootstrap modals$/, () => {
  cy.get(":nth-child(5) > ul > :nth-child(2)")
    .should("exist")
    .and("be.visible")
    .click();
});

When(/^I click on the Single launch modal button$/, () => {
  cy.get(".row:nth-child(2) .panel-body > .btn")
    .should("exist")
    .and("be.visible")
    .click();
});

Then(/^I confirm the modal is displayed$/, () => {
  cy.get("#myModal0 > .modal-dialog > .modal-content > .modal-body")
    .should("exist")
    .invoke("text")
    .then((text) => {
      const actualText = text
        .trim()
        .replace(/^\s*×\s*/, "")
        .replace(/\s+/g, " ");
      const expectedText =
        "This is the place where the content for the modal dialog displays";
      expect(actualText).to.contain(expectedText);
    });
});

When(/^I click on the close button$/, () => {
  cy.get("#myModal0 .btn:nth-child(1)")
    .should("exist")
    .and("be.visible")
    .click();
});

Then(/^The modal should not be visible$/, () => {
  cy.get("#myModal0 .modal-body").should("not.be.visible");
});

//Multiple_Modal
When(/^I confirm the Multiple modal header$/, () => {
  cy.get(".row:nth-child(3) .panel-heading")
    .should("exist")
    .and("have.text", "Multiple Modal Example");
});

Then(/^I click on the Mutliple launch modal button$/, () => {
  cy.get(".row:nth-child(3) .panel-body > .btn")
    .should("be.visible")
    .and("exist")
    .click();
});

When(/^I confirm that First modal is displayed$/, () => {
  cy.get("#myModal .modal-body")
    .should("exist")
    .invoke("text")
    .then((text) => {
      const actualText = text
        .trim()
        .replace(/^\s*×\s*/, "")
        .replace(/\s+/g, " ");
      const expectedText =
        "This is the place where the content for the modal dialog displays";
      expect(actualText).to.contain(expectedText);
    });
});

When(/^I click the launch modal button to open second modal$/, () => {
  cy.get(".btn:nth-child(7)").should("be.visible").and("exist").click();
});

Then(/^I confirm the second modal is displayed$/, () => {
  cy.get("#myModal2 .modal-title")
    .should("be.visible")
    .and("have.text", "Modal 2");
});

When(/^I click the close button on the second modal$/, () => {
  cy.get(".modal-footer:nth-child(6) > .btn:nth-child(1)")
    .should("be.visible")
    .click();
});

Then(/^I should see the First modal$/, () => {
  cy.get("#myModal .modal-title")
    .should("be.visible")
    .and("have.text", "First Modal");
});

When(/^I click the close button on the first modal$/, () => {
  cy.get("#myModal .btn:nth-child(1)").should("be.visible").click();
});

Then(/^I confirm all modals closes$/, () => {
  cy.get("#myModal .modal-body").should("not.be.visible");
});
