// npx playwright test /tests/login.spec.js --project chromium --headed
const { test, expect } = require('@playwright/test');

test('Login Demo 1', async ({page}) => {

    await page.goto('https://demo.applitools.com/')
    // await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('peerapol')
    await page.locator('[placeholder="Enter your password"]').fill('pwd1234')
    await page.waitForSelector('text=Sign in', {timeout:4000})
    await page.locator('text=Sign in').click()
});

test('Login Demo 2', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.pause()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click();
});
