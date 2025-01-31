// cypress/support/Pages/LoginPage.js

class LoginPage {
    validation() {
        cy.get('[alt="Page Under Construction"]').should('be.visible');
    }

    clickwork() {
        cy.get('.work-btn-selector').click();
    }

    profile() {
        cy.get('.profile-avatar').click();
    }

    signout() {
        cy.get('.signout-btn').click();
    }
}

export default new LoginPage();
