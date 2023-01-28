import { chromium, FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://dunamikoslab.zendesk.com/');
  await page.getByLabel('Email').fill(process.env.ZENDESK_EMAIL!);
  await page.getByLabel('Password').fill(process.env.ZENDESK_PASSWORD!);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
