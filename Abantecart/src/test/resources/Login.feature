Feature:checking login functionality
  @login
  Scenario:verify login link
    Given user is on AbanteCart homepage
    When user clicks on "Login or register" link
    Then user should land on the "Account Login" new page




  @invalidlogin
  Scenario Outline: User is not able to login successfully
    Given user is on AbanteCart homepage
    When user clicks on "Login or register" link
    And user enters "<loginname>" and "<password>"
    And clicks on login button
    Then user should not be logged in with "<error message>"
    Examples:
      | loginname | password | error message                        |
      | sampsan   |          | Incorrect login or password provided |
      |           | dholak   | Incorrect login or password provided |


  @new_scenario
  Scenario Outline: User is not able to login successfully
    Given user is on AbanteCart homepage
    When user clicks on "Login or register" link
    And user enters "<loginname>" and "<password>"
    And clicks on login button
    Then user should not be logged in with "<error message>"
    Examples:
      | loginname | password | error message                        |
      | sampsan   |          | Incorrect login or password provided |
      |           | dholak   | Incorrect login or password provided |