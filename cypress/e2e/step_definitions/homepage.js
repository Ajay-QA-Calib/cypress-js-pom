import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import '@4tw/cypress-drag-drop';

Then('User Clicks work button', function() {
    cy.get('body > div.d-flex.h-100vh > div.expand-sideNav > div > div.dataset > div.overflow-auto.h-640px.scrollbar-hidden.new-group-styles > div > div > div > div > div:nth-child(2) > div > div > div > li > div > div').click()
});

When('Click the customize button', function(){
    cy.get('.MuiButtonBase-root:nth-child(2) > [class="d-flex align-center gap-0-5"]').click()
});

Then('Click the sort button', function() {
    cy.get('[class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary customized-tab css-1q2h7u5"]').click()
});

When('I click the checkbox on', function() {
    cy.get('[id="75bdb2fe673d4795982767a21cdc02ea"]').check(),
    cy.get('[id="bd7a0fc026954036abf8b2c211c32e50"]').check(),
    cy.get('[type="submit"]').click();
})