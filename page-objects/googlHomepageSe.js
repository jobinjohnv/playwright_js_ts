const {By,Key} = require('selenium-webdriver')

exports.GoogleHomePageSelenium = class GoogleHomePageSelenium{


    constructor(driver){
    this.driver = driver;
    }

    async enterSearchField(searchInput){
        await this.driver.get('https://www.google.com');
        await this.driver.findElement(By.xpath('//input[@name="q"]')).sendKeys(searchInput, Key.RETURN);
    }

    async getFirstSearchResult(){
        const firstTestResult = await this.driver.findElement(By.xpath("(//h1[contains(text(),'Search Results')]/../div//h3)[1]")).getText();
        return firstTestResult;
    }
}