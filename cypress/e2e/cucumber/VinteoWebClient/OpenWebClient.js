import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Пользователь перешел на сайт', () => {
    cy.visit(`https://10.23.8.92/client?conference=999993`);
});

Then('Открыта страница', () => {
    cy.get('#wrap3').should('exist')
});

