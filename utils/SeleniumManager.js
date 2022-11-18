const {Builder} = require('selenium-webdriver')

exports.SeleniumManager = class SeleniumManager{

    constructor(browserName){
        this.browserName = browserName;
    }

    async getDriver(){
        let driver = await new Builder().forBrowser('chrome').build();
        return driver;
    }
}
