Feature: Login functionality validation

  Scenario: User logs in successfully
    Given Launch the login page
    When The user logs in with valid credentials
    Then User Successfully logged in with valid creds

  Scenario: User login with invalid creds
    Given Launch the login page
    When User login with invalid creds
    Then User got a popup as user does not Exist

  Scenario: User login vith valid username and invalid password
    Given Launch the login page
    When user tries to login with valid username and invalid password
    Then User got a popup as user does not Exist

