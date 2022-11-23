// npx playwright test /tests/demo/doc.spec.js --project chromium --headed
import { test, expect } from '@playwright/test';

// test.afterEach(async ({ page }, testInfo) => {
//   console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

//   if (testInfo.status !== testInfo.expectedStatus)
//     console.log(`Did not run as expected, ended up at ${page.url()}`);
// });

// test('my test', async ({ page }) => {
//   // ...
// });

// test('my test2', async ({ page }) => {
//   // ...
// });

///////////////////////////////////////////////////

// test.beforeAll(async () => {
//   console.log('Before tests');
// });

// test.afterAll(async () => {
//   console.log('After tests');
// });

// test('my test', async ({ page }) => {
//   // ...
// });

// test('my test2', async ({ page }) => {
//   // ...
// });

///////////////////////////////////////////////////

// test.beforeEach(async ({ page }, testInfo) => {
//   console.log(`Running ${testInfo.title}`);
//   await page.goto('https://www.youtube.com/');
// });

// test('my test', async ({ page }) => {
//   expect(page.url()).toBe('https://www.youtube.com/');
// });

///////////////////////////////////////////////////
// test.describe.configure({ mode: 'parallel' });
// test('runs in parallel 1', async () => {
//   console.log('Before tests');
// });
// test('runs in parallel 2', async () => {
//   console.log('After tests');
// });

// test.describe.configure({ mode: 'serial' });
// test('runs first', async ({ page }) => {});
// test('runs second', async ({ page }) => {});
