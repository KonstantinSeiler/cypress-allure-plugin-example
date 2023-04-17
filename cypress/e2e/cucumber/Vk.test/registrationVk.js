import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

    Given('Пользователь перешел на сайт', () => {
    cy.visit(`https://vk.com`);
});

    When('Пользователь нажал Зарегистрироваться', () => {
    cy.contains('Зарегистрироваться').click();

});

    When('Пользователь нажал ввод номера телефона', () => {
    cy.get('.vkuiInput__el').click()
});

    When('Пользователь ввел номер телефона', () => {
    cy.get('.vkuiInput__el').type('7 777 777 7777')
    });


    When('Пользователь нажал кнопку Продолжить', () => {
        cy.contains('Продолжить').click();
    
    });



    Then('Открыто окно регистрации', () => {
        cy.get('.vkc__AuthRoot__contentIn').should('exist')
    });
    
    Then('Номер телефона введен', () => {
    cy.get('input[name="phone"]').should('have.value', '+7 777 777 7777')
});

    Then('Открыто окно подтверждения входа', () => {
    cy.get('.vkc__AuthSimpleScreen__container').should('exist')
});
