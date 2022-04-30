Feature: Purchase from an unauthenticated user

Scenario: The user is not authenticated and tries to make a purchase
    Given An unauthenticated user goes to the product list
    When I try to make a purchase
    Then I am redirected to the profile page