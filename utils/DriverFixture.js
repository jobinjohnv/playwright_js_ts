const base = require('@playwright/test')
const { SeleniumManager } = require('./SeleniumManager')
const {Builder, WebDriver} = require('selenium-webdriver')


exports.test = base.test.extend({
    driver: async({},use) =>{
        await use(new Builder().forBrowser('chrome').build());
    }
});

exports.expect = base.expect;