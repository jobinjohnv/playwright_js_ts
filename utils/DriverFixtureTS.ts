import{test as  base} from '@playwright/test'
import {Builder, WebDriver} from 'selenium-webdriver'


type customFixtures = {
    driver: WebDriver
}

export const test = base.extend<customFixtures>({
    driver: async({},use) =>{
        await use(new Builder().forBrowser('chrome').build());
    }
});

export {expect} from '@playwright/test';