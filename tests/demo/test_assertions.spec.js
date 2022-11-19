// npx playwright test /tests/test_assertions.spec.js --project chromium --headed
import { test, expect } from '@playwright/test'

test('Assertion Demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    await page.$('text=The Kitchen')

    if ( await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }

    await expect(page.locator('text=The Kitchen')).toBeVisible()
    // await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    await expect.soft(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('The Kitchenssss')

    await expect.soft(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect.soft(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*heading css-dpmy2a/)
    await expect.soft(page.locator('text=The Kitchen')).toHaveClass(/.*heading css-dpmy2a/)


    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/Kitchen/)




})
