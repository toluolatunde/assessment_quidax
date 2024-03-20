Feature: Simple Form Demo Tests


  Scenario: Single Input Field
    When The landing page fully loads
    Then I click Input forms on the Menu List
    And I click Simple form demo
    Then I am redirected to Inputs page
    When I see Single input Field
    Then I confirm no previous text has been entered in Your message
    And I enter text in the message field
    And I click on the Show message button
    Then The entered text should be displayed in Your message

  
 Scenario: Multiple Input Fields
    When I find Two input fields 
    Then The total sum should not have any value
    And I type 10 in A textfield
    And I type 45 in B textfield
    And I click the Get total button
    Then The sum of textfield A and B should 20 and displayed