import { test, expect } from '@playwright/test';
import {GoogleHomePagePW_TS} from '../page-objects/googleHomePagePW_TS'

test('Verify homepage has title and links to intro page ts', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('Testing cisco google test results with Playwright', async ({page}) => {
  let googleHomePage : GoogleHomePagePW_TS = new GoogleHomePagePW_TS(page);
  await googleHomePage.enterSearchField('cisco');
  const firstTestResult = await googleHomePage.getFirstSearchResult();
});
