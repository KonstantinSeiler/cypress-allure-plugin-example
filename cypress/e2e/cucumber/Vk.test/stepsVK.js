import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('Пользователь перешел на сайт', () => {
    cy.visit(`https://vk.com`);
});


When('Пользователь нажал ввод номера телефона', () => {
    cy.get('.VkIdForm__input').click()
});

When('Пользователь ввел номер телефона', () => {
     cy.get('#index_email').type('99999999999')
     });


When('Пользователь нажал кнопку войти', () => {
    cy.get('.VkIdForm__signInButton').click()

});



Then('Сайт открыт', () => {
    cy.get('.VkIdForm__form').should('exist')
});


Then('Открыто окно ввода пароля', () => {
    cy.get('input[name="password"]').should('exist')
});


Then('Номер телефона введен', () => {
    cy.get('input[name="login"]').should('have.value', '99999999999')
});

// Then('Пользователь ввел номер телефона  ', () => {
//     cy.get('input[type"tel"]').type('9176412286')
// });

// Then('Открыто поле ввода номера телефона', () => {
//     cy.get('#check_box_on_24').should('exist')
// });




// Then('Открыто окно ввода номера', () => {
//     cy.contains('Зарегистрироваться').click();

// });


// When ('Пользователь перезагрузил страницу'), () => {
// cy.reload(true)
// });
