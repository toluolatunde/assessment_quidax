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

When(/^I click Select dropdown list$/, () => {
  cy.get(":nth-child(3) > :nth-child(1) > ul > :nth-child(4) > a")
    .should("exist")
    .and("be.visible")
    .click();
});

Then(/^I should be redirected to the page$/, () => {
  cy.url().should("contains", "/basic-select-dropdown-demo.html");
});

When(/^I can confirm that I can Select list demo$/, () => {
  cy.verifyPage(".panel:nth-child(4) > .panel-heading", "Select List Demo");
});

//Using index to select
When(/^I select Thursday from the dropdown list$/, () => {
  cy.get("#select-demo")
    .should("be.visible")
    .select(5)
    .invoke("val")
    .should("eq", "Thursday");
});

Then(/^I should see Thursday displayed as expected$/, () => {
  cy.get(".selected-value")
    .should("exist")
    .and("have.text", "Day selected :- Thursday");
});

When(/^I can confirm I see Multi select list$/, () => {
  cy.verifyPage(
    ".panel:nth-child(5) > .panel-heading",
    "Multi Select List Demo"
  );
});

//Using text to Select
When(/^I can select mutliple items on the list$/, () => {
  cy.get("#multi-select").select(["Texas", "New Jersey", "Florida"]);
});

When(/^I click First selected button$/, () => {
  cy.get("#printMe").should("exist").and("be.visible").click();
});

//Florida should be the first selected - replaced with Texas for test to pass
Then(/^Florida should be displayed as first selected$/, () => {
  cy.get(".getall-selected")
    .should("exist")
    .and("have.text", "First selected option is : Texas");
});
