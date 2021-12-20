Feature: Main Page

  I want to open a search engine

  @focus
  Scenario: Opening Home page
    Given I open Home page
    Then I see "My Site" in the title
