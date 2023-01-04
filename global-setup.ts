import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://dunamikoslab.zendesk.com/');
  // Click the get started link.
  await page.getByLabel('Email').fill('roger@dunamikoslab.com');
  console.log(page.getByLabel('Password'));

  await page.getByLabel('Password').fill('makanayampenyet');
  await page.context().storageState({ path: 'storageState.json' });
  console.log('ajsdklfjklasjdkl;fjaslk;djfkl;asjl;djfasdf');
  await browser.close();
}

export default globalSetup;
