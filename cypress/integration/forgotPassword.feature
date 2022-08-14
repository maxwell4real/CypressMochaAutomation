Feature: Forgot Password

  Scenario: As a user I want to reset my password
    Given I am on the home page
    And I click the sign in link
    And I click on the forgot password link
    And I enter email in the forgot password field
    And I click retrive password button