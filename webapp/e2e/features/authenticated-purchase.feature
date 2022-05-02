Feature: Purchase from an authenticated user

Scenario: The authenticated user makes a purchase
    Given A user is authenticated
    When I try to make a purchase
    Then The purchase is shown in the history