const {expect,test} = require('@playwright/test')
require('chromedriver')
const {SeleniumManager} = require('../utils/SeleniumManager')
const {GoogleHomePageSelenium} = require('../page-objects/googlHomepageSe')



test('Test without playwright',async ()=>{
    //Get the Driver based on the mentioned browsers
    const seleniumManager = new SeleniumManager();
    let driver = await seleniumManager.getDriver();
    // Create the page object of the required pages
    const googleHomePage = new GoogleHomePageSelenium(driver);
    await googleHomePage.enterSearchField('cisco');
    const firstTestResult = await googleHomePage.getFirstSearchResult();
    await expect(firstTestResult).toContain('Cisco');
    await driver.quit();
});