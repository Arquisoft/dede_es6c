Feature: History from an unauthenticated user

Scenario: The unauthenticated user tries to view his history
    Given An unauthenticated user goes to the home view
    When I try to go to history view
    Then I find the history list empty