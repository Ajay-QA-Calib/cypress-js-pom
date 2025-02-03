import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Launch the login page', function () {
    cy.visit('https://testin.doworks.com/');
});

When('The user logs in with valid credentials', function () {
    cy.fixture('usercreds').as('userdata').then(() => {
        cy.login(this.userdata.valid.username, this.userdata.valid.password);
    });
});

Then('User Successfully logged in with valid creds', function () {
    cy.get('[alt="Page Under Construction"]').should('be.visible');
});

When('User login with invalid creds', function () {
    cy.fixture('usercreds').as('userdata').then(() => {
        cy.login(this.userdata.invalid.username, this.userdata.valid.password);
    });
});

Then('User got a popup as user does not Exist', function () {
    cy.on('[role="alert"]',(txt)=>{
        expect(txt).to.contains('User does not exist.');
        })
})

When('user tries to login with valid username and invalid password', function () {
    cy.fixture('usercreds').as('userdata').then(() => {
        cy.login(this.userdata.valid.username, this.userdata.invalid.password);
    });
});

Then('User got a popup as Incorrect username or password', function () {
    cy.on('[role="alert"]',(txt)=>{
        cy.wait(3000);
        expect(txt).to.contains('Incorrect username or password.');
        })
})