// npx playwright test /tests/test_demo.spec.js --project chromium --headed
const { test, expect } = require('@playwright/test');

test('Login Demo 1', async ({page}) => {

    await page.goto('https://demo.applitools.com/')
    
    await page.locator('[placeholder="Enter your username"]').fill('peerapol')
    await page.locator('[placeholder="Enter your password"]').fill('pwd1234')
    await page.waitForSelector('text=Sign in', {timeout:4000})
    await page.locator('text=Sign in').click()
    
    await page.pause()

    await expect(page.locator('text=Make Payment')).toBeVisible()
    await page.locator('text=Make Payment').click()
    await page.locator('text=Make Payment').click()

    await expect(page.locator('text=Lending')).toBeVisible()
    await expect(page.getByRole('link', { name: '  Loans' })).toBeVisible()
    await expect(page.locator('text=Lending')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Financial Overview' })).toBeVisible()

    await page.close()

});


