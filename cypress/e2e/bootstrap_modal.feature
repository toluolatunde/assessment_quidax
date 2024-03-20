Feature: Bootstrap Modals Tests


  Scenario: Single Modal Example
    When The landing page fully loads
    Then I click Alerts and modals on the Menu List
    And I click Bootstrap modals
    And I click on the Single launch modal button
    And I confirm the modal is displayed
    And I click on the close button
    Then The modal should not be visible
    

  Scenario: Multiple Modal Example
    When I confirm the Multiple modal header 
    Then I click on the Mutliple launch modal button
    And I confirm that First modal is displayed
    When I click the launch modal button to open second modal
    Then I confirm the second modal is displayed
    And I click the close button on the second modal
    Then I should see the First modal
    When I click the close button on the first modal
    Then I confirm all modals closes
