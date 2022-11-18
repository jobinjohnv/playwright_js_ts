 import {Page} from '@playwright/test'
 
 export class GoogleHomePagePW_TS{

  
    constructor(page : Page){
        this.page = page;
    }

    readonly page: Page;

    async enterSearchField(searchInput){
       await this.page.goto('https://www.google.com');
       await this.page.locator('//input[@name="q"]').fill('cisco');
       await this.page.keyboard.press('Enter');
    }

    async getFirstSearchResult(){
       return await this.page.locator("(//h1[contains(text(),'Search Results')]/../div//h3)[1]").innerText();
    }
 }