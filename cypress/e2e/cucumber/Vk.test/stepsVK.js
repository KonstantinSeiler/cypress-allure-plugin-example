import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('Пользователь перешел на сайт', () => {
    cy.visit(`https://vk.com`);
});


Then('Сайт открыт', () => {
    cy.get('.VkIdForm__form').should('exist')
});

When('Пользователь нажал ввод номера телефона', () => {
    cy.get('.VkIdForm__input').click()
});

When('Пользователь ввел номер телефона', () => {
     cy.get('#index_email').type('89176412286')
     });



// When('Пользователь нажал Зарегистрироваться', () => {
//     cy.contains('Зарегистрироваться').click();

// });

// Then('Открыто поле ввода номера телефона', () => {
//     cy.get('Body').should('exist')
// });




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
