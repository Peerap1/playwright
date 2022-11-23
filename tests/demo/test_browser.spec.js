// npx playwright test /tests/demo/test_browser.spec.js --project chromium --headed
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test')

test('test', async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();
  
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="login-button"]').click();

  await context.close();
  await browser.close();
});

test.only('test2', async () => {
  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('http://example.com');
  // other actions...
  await browser.close();
});