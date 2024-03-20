import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(/^I am on the Selenium Easy page$/, () => {
  cy.verifyPage(".panel-heading", "Menu List");
});

When(/^The landing page fully loads$/, () => {
  cy.verifyPage(".panel-heading", "Menu List");
});

Then(/^I click Input forms on the Menu List$/, () => {
  cy.get(':nth-child(3) > :nth-child(1) > [href="#"]')
    .should("exist")
    .and("be.visible")
    .click();
});

When(/^I click Simple form demo$/, () => {
  cy.get(":nth-child(3) > :nth-child(1) > ul > :nth-child(1) > a")
    .should("exist")
    .and("be.visible")
    .click();
});

Then(/^I am redirected to Inputs page$/, () => {
  cy.url().should(
    "contains",
    "https://demo.seleniumeasy.com/basic-first-form-demo.html"
  );
});

When(/^I see Single input Field$/, () => {
  cy.get(":nth-child(4) > .panel-heading")
    .should("be.visible")
    .and("have.text", "Single Input Field");
});

Then(/^I confirm no previous text has been entered in Your message$/, () => {
  cy.get(":nth-child(4) > .panel-body > :nth-child(4) > label")
    .should("be.visible")
    .and("have.text", "Your Message: ");
});

When(/^I enter text in the message field$/, () => {
  cy.get(".form-group > #user-message")
    .should("be.visible")
    .and("exist")
    .type("This is an assessment for Quidax");
});

When(/^I click on the Show message button$/, () => {
  cy.get(".btn:nth-child(2)").should("be.visible").click();
});

Then(/^The entered text should be displayed in Your message$/, () => {
  cy.get("#display")
    .should("be.visible")
    .and("have.text", "This is an assessment for Quidax");
});

When(/^I find Two input fields$/, () => {
  cy.get(".panel:nth-child(5) > .panel-heading")
    .should("exist")
    .and("have.text", "Two Input Fields");
});

Then(/^The total sum should not have any value$/, () => {
  cy.get("#displayvalue").should("exist").and("not.be.visible");
});

When(/^I type 10 in A textfield$/, () => {
  cy.get("#value1").should("exist").and("be.visible").type(10);
});

When(/^I type 45 in B textfield$/, () => {
  cy.get("#value2").should("exist").and("be.visible").type(45);
});

When(/^I click the Get total button$/, () => {
  cy.get(".btn:nth-child(3)").should("exist").and("be.visible").click();
});

Then(/^The sum of textfield A and B should 20 and displayed$/, () => {
  cy.get("#displayvalue").should("be.visible").and("have.text", "55");
});
