// npx playwright test /tests/test_hook.spec.js --project chromium --headed
const { test, expect } = require('@playwright/test');

test.describe('all my tests', () => {


    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        // await page.close()
    });

    test.afterAll(async ({ page }) => {
        await page.close()

    })

    test('Login Demo 2', async ({ page }) => {
        await page.getByRole('link', { name: 'Sauce Labs Backpack' }).filter({ hasText: 'Sauce Labs Backpack' }).click();

    });

    test('Login Demo 3', async ({ page }) => {
        await page.getByRole('link', { name: 'Sauce Labs Backpack' }).filter({ hasText: 'Sauce Labs Backpack' }).click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();

    });

});

