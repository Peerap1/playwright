const { test, expect } = require('@playwright/test');
const {hello, ole} = require('./demo/hello')

console.log (hello());
console.log (ole());

test('My frist test', async ({page}) => {

    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')

    

})