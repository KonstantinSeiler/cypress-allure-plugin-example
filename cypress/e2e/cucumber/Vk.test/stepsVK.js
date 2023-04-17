import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('Пользователь перешел на сайт', () => {
    cy.visit(`https://vk.com`);
});





When('Пользователь нажал ввод номера телефона', () => {
    cy.get('.VkIdForm__input').click()
});

When('Пользователь ввел номер телефона', () => {
     cy.get('#index_email').type('88888888888')
     });


When('Пользователь нажал кнопку войти', () => {
    cy.get('.VkIdForm__signInButton').click()

});

When('Пользователь нажал Забыли или не установили пароль?', () => {
   cy.contains('Забыли или не установили пароль?').click()

});


When('Пользователь нажал Нет, восстановить пароль', () => {
cy.get('a[href*="https://vk.com/restore?login=88888888888&restore_nav=qr_go_to_restore"]').click()

});

When('Пользователь нажал Продолжить', () => {
    cy.contains('Продолжить').click()
 
 });

Then('Сайт открыт', () => {
    cy.get('.VkIdForm__form').should('exist')
});


Then('Номер телефона введен', () => {
    cy.get('input[name="login"]').should('have.value', '88888888888')
});


Then('Открыто окно ввода пароля', () => {
    cy.get('input[name="password"]').should('exist')
});


Then('Открыто окно выбора восстановления', () => {
    cy.get('.vkuiModalCardBase__container').should('exist')
});

Then('Открыто окно подтверждения пользователя', () => {
    cy.get('.vkuiGroup__inner').should('exist')
});

Then('Открыто окно подтверждения номера телефона', () => {
    cy.get('.CUAHero-common--skocjj').should('exist')
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
