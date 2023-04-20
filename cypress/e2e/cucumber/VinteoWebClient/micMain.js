import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import dom from '../dom'

Given('Пользователь перешел на сайт', () => {
    dom.visitByLinkUrl ('https://10.23.8.92/client?conference=999993')
});

When('Пользователь выключил микрофон', () => {
    dom.getByTestId ('callActionsMic').click()
});

    