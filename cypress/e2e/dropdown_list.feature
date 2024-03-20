Feature: Dropdown Tests


   Scenario: Select list demo
   When The landing page fully loads
    Then I click Input forms on the Menu List
    When I click Select dropdown list 
    Then I should be redirected to the page
    When I can confirm that I can Select list demo
    And I select Thursday from the dropdown list
    And I should see Thursday displayed as expected
    
  
 Scenario: Multi Select list demo
    When I can confirm I see Multi select list
    Then I can select mutliple items on the list
    When I click First selected button
    Then Florida should be displayed as first selected


