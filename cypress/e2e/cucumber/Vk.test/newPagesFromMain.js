import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('Пользователь перешел на сайт', () => {
    cy.visit(`https://vk.com`);
});


When('Пользователь нажал О ВКонтакте', () => {
    cy.contains('О ВКонтакте').click();

});

When('Пользователь нажал Правила', () => {
    cy.contains('Правила').click();

});



When('Пользователь нажал Все продукты', () => {
    cy.contains('Все продукты').click();

});

When('Пользователь нажал Google Play', () => {
    cy.contains('Google Play').click();

});

When('Пользователь нажал RuStore', () => {
    cy.contains('RuStore').click();

});

When('Пользователь нажал App Store', () => {
    cy.contains('App Store').click();

});


Then('Открылась страница about', () => {
    cy.get('#page_wrap').should('exist')
});

Then('Открылась страница terms', () => {
    cy.get('#wrap3').should('exist')
});




Then('Открылась страница products', () => {
    cy.get('.PageSection').should('exist')
});

Then('Открылась страница store apps', () => {
    cy.get('a[href*="https://play.google.com/store/apps/details?id=com.vkontakte.android"]').should('exist')
});

Then('Открылась страница apps RuStore', () => {
    cy.get('a[href*="https://apps.rustore.ru/app/com.vkontakte.android"]').should('exist')
});

Then('Открылась страница app apple', () => {
    cy.get('a[href*="https://itunes.apple.com/ru/app/id564177498"]').should('exist')
});