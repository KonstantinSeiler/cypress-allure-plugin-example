import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Пользователь перешел на сайт', () => {
    cy.visit(`https://vk.com`);
});


When('Пользователь нажал Зарегистрироваться', () => {
    cy.contains('Зарегистрироваться').click();

});

Then('Открыто окно регистрации', () => {
    cy.get('.vkc__AuthRoot__contentIn').should('exist')
});