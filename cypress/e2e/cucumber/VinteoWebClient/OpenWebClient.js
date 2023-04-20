import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Пользователь перешел на сайт', () => {
    cy.visit(`https://10.23.8.92/client?conference=999993`);
});



When('Пользователь нажал на строку ввода имени', () => {
    cy.get('#input9').click()
});










Then('Открыта страница', () => {
    cy.get('.layout__workspace__content').should('exist')
});


Then('Доступно поле ввода', () => {
    cy.get('#input9').should('exist')
});
