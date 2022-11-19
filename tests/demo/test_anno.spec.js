// npx playwright test /tests/test_anno.spec.js --project chromium --headed
const { test, expect } = require('@playwright/test');

test.skip('Login Demo 1', async ({page}) => {
    await page.goto('https://demo.applitools.com/')
});


// test('Login Demo 2', async ({page}) => {
//     test.fail();
// });

test.fixme('Login Demo 3', async ({page}) => {
    // test.fail();
});