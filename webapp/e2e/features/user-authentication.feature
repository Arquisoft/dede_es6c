Feature: An user is authenticated

Scenario: The user is not authenticated and tries to authenticate
    Given An unauthenticated user goes to the profile view
    When The user is authenticated
    Then User information is displayed