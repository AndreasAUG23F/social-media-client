describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/"); // Adjust this URL to match your login page
  });

  it("prevents login with invalid credentials and shows error message", () => {
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get('input[id="loginEmail"]').type("invaliduser@example.com");
    cy.get('input[id="loginPassword"]').type("invalidpassword123");
    cy.get("#loginForm").submit();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Invalid email or password");
    });
  });

  it("allows user to log in with valid credentials", () => {
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get('input[id="loginEmail"]').type("cypress.tester@stud.noroff.no");
    cy.get('input[id="loginPassword"]').type("12345678");
    cy.get("#loginForm").submit();
    cy.wait(1000);
    cy.url().should("include", "/?view=profile&name=trallala");
  });

  it("allows user to log out using the logout button", () => {
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get('input[id="loginEmail"]').type("cypress.tester@stud.noroff.no");
    cy.get('input[id="loginPassword"]').type("12345678");
    cy.get("#loginForm").submit();
    cy.wait(1000);
    cy.url().should("include", "/?view=profile&name=trallala");
    cy.get("button").contains("Logout").click();
    cy.url().should("include", "/");
  });

  /* 
  it("prevents login with invalid credentials and shows error message", () => {
    
    cy.get("form").submit();

    // Assert that login failed and error message is shown
    cy.url().should("include", "/login"); // User should remain on login page
    cy.get("body").should("contain", "Invalid email or password"); // Adjust to match your error message
  });

  it("allows user to log out using the logout button", () => {
    // First, log in the user
    cy.get('input[name="email"]').type("validuser@example.com");
    cy.get('input[name="password"]').type("validpassword123");
    cy.get("form").submit();

    // Wait for login to complete and dashboard to load
    cy.url().should("include", "/dashboard");

    // Now, click the logout button
    cy.get("button").contains("Logout").click();

    // Assert that logout was successful
    cy.url().should("include", "/login"); // Or wherever your app redirects after logout
    cy.get("body").should("contain", "Login"); // Or any element that confirms we're back at the login page
  }); */
});
