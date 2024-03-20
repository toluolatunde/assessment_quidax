Feature: Bootstrap Alert Tests


  Scenario: Normal Success Message
    When The landing page fully loads
    Then I click Alert and modals on the Menu List
    And I click Bootstrap alerts
    And I select Normal success message
    Then I confirm alert success message is displayed
    When I click close button
    Then The alert should close
    

  Scenario: Autocloseable Warning Message
    When I click the autocloseable warning message
    And I confirm the alert is displayed
    Then I confirm that after 3 seconds the alert closes
