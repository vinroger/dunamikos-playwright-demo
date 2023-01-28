import { test, expect } from '@playwright/test';
import { ChatPage } from 'pages/ChatPage';
import { HomePage } from 'pages/HomePage';
import { NavBar } from 'pages/NavBar';

export type NavStatusType = 'invisible' | 'away' | 'online';

// test('Homepage has 4 widgets', async ({ page }) => {
//   const ZenChatHomePage = new HomePage(page);
//   await ZenChatHomePage.goto();
//   await expect(ZenChatHomePage.widget).toHaveCount(4);
// });

test('Status is changeable', async ({ page }) => {
  const ZenChatHomePage = new HomePage(page);
  await ZenChatHomePage.goto();
  await expect(ZenChatHomePage.widget).toHaveCount(4);
  const ZenDeskNavBar = new NavBar(page);
  const statuses: NavStatusType[] = ['invisible', 'online', 'away'];
  for (const i of statuses) {
    await ZenDeskNavBar.changeStatus(i);
    // await page.waitForLoadState('networkidle');
    const output = await ZenDeskNavBar.getStatus();
    expect(output.toLowerCase()).toBe(i);
  }
});

