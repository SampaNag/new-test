Feature: Makeup functionality working as expected
  @makeup
  Scenario: verify makeup link
    Given user is on AbanteCart homepage
    When user clicks on Makeup link
    And user clicks on Eyes link
    And user clicks on Waterproof Protective Undereye Concealer link
    And  user clicks on Add to Cart link
    When user clicks on Remove link
    Then the shopping crt should be updated with message "Your shopping cart is empty!"