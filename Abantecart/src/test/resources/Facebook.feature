Feature: Facebook functionality
  @facebook
  Scenario: verify facebook link
    Given user is on AbanteCart homepage
    When user clicks on the link "Facebook"
    Then  user should view "Facebook" page