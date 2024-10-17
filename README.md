## Workspace pre commit

Configured ESlint & Prettier.
Required to pass to commit.

## Jest Unit Testing

Implemented unit tests using Jest for the login functionality:

- Verifies that the login function properly stores the token in local storage.
- Confirms that the logout function correctly clears storage.

All Jest tests are co-located with the code they test for easy maintenance.

## Cypress E2E Testing

Created end-to-end tests using Cypress to validate authentication flow:

- Ensures that invalid credentials prevent login.
- Confirms that valid credentials allow successful login.
- Verifies that the logout function properly logs the user out and redirects to the homepage ("/").

Cypress tests are located in `cypress/e2e/tests`
