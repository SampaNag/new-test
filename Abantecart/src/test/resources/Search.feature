Feature: Search box Functionality
  @search
  Scenario: verify search box
    Given user is on AbanteCart homepage
    When user types  "makeup" in the search box
    And user clicks "Go" option
    Then "Search" page should be display

  @invalidsearch
  Scenario: verify search box with Invalid data
    Given user is on AbanteCart homepage
    When user types  invalid "asdre" in the search box
    And  user clicks "Go" option
    Then "There is no product that matches the search criteria" message page should be display
