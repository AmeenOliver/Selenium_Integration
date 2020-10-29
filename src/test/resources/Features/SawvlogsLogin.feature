Feature: Test Check for Google Search

  Scenario Outline: check Google Search successfully
    Given Browser is open
    When user enter <username> and <password>
    And click on search button
    Then user is navigated to search page

    Examples: 
      | username | password |
      | bouchta  | henda    |
      | amine    | el youbi |
      | Soufiane | tutu     |
