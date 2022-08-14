Feature: Login

  Scenario Outline: As a user I want to login successfully
    Given I am on the home page
    And I click the sign in link
    And I enter email "<myemail>" in the email field
    And I enter password "<mypassword>" in the password field
     When I click the login button
     Then I verify "<expectedName>" on my detail page
     And I sign out

    Examples:
      | myemail            | mypassword   | expectedName |
      | laura@gmail.com    | Today001     | Laura Davies |
       | Smith530@gmail.com | Sunday001    | Smith Mike   |