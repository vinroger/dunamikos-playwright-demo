import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//   await page.goto('https://dunamikoslab.zendesk.com/');

//   // Click the get started link.
//   await page.getByLabel('Email').fill('roger@dunamikoslab.com');
//   console.log(page.getByLabel('Password'));

//   await page.getByLabel('Password').fill('makanayampenyet');
// });
test.use({ storageState: 'storageState.json' });

test('Check has 4 Widget', async ({ page }) => {
  await page.goto('https://dunamikoslab.zendesk.com/');
  await expect(page.locator('.Well-zk7a8s-0')).toHaveCount(4);
});
