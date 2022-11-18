//import {By,Key, Builder, WebDriver} from 'selenium-webdriver'
import {expect, test} from '@playwright/test';
import {WebDriver,Builder,By,Key} from 'selenium-webdriver';




test('Testing cisco google test results with Selenium', async () =>{
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    await driver.findElement(By.xpath("//input[@name='q']")).sendKeys('cisco',Key.RETURN);
    await driver.sleep(2000);
});