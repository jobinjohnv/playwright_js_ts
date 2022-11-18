const{test} = require('../utils/DriverFixtureTS')
const {By,Key} = require('selenium-webdriver')
let firstSearchResult = "(//h1[contains(text(),'Search Results')]/../div//h3)[1]"

test('Test using fixture',async ({driver}) => {
    await driver.get('https://www.google.com'); 
    await driver.findElement(By.name('q')).sendKeys('cisco secure', Key.RETURN);
    const searchTitle = await driver.getTitle();
    console.log('Page title when executing using Selenium is : '+searchTitle)
});

test('Test using playwright',async ({page})=>{
    await page.goto('https://www.google.com');
    await page.locator('//input[@name="q"]').fill('cisco secure');
    await page.keyboard.press('Enter');
    await page.locator(firstSearchResult).waitFor();
    const searchTitle = await page.title();
    console.log('Page title when executing using Playwright is : '+searchTitle)
});