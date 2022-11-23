import { test, expect } from '@playwright/test';
const { chromium, devices } = require('@playwright/test')
const iPhone = devices['iPhone 12'];

test('test', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...iPhone
  });
  const page = await context.newPage();
  // await page.goto('http://example.com');
    await page.goto('https://demo.applitools.com/')

    await page.locator('[placeholder="Enter your username"]').fill('peerapol')
    await page.locator('[placeholder="Enter your password"]').fill('pwd1234')
    await page.waitForSelector('text=Sign in', { timeout: 4000 })
    await page.locator('text=Sign in').click()

  // other actions...
    await browser.close();
});
