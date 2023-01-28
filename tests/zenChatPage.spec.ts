import { ChatPage } from 'pages/ChatPage';
import { test, expect } from '@playwright/test';
import { NavBar } from 'pages/NavBar';

test('pop up detected', async ({ page }) => {
  const chatPage = new ChatPage(page);
  const ZenDeskNavBar = new NavBar(page);
  await chatPage.goto();
  await chatPage.simulateVisitor();
  await ZenDeskNavBar.changeStatus('online');
  await chatPage.sendHelloAgent();
  await chatPage.sendHelloCustomer();
  const visitorMsg = await chatPage
    .visitorPage!.frameLocator(
      'internal:attr=[title="Find more information here"i]'
    )
    .getByTestId('chat-msg-user')
    .locator('div')
    .locator('span')
    .locator('span')
    .innerHTML();
  expect(visitorMsg).toBe('Hello Agent!');
  const agentMsg = await chatPage
    .visitorPage!.frameLocator(
      'internal:attr=[title="Find more information here"i]'
    )
    .getByTestId('chat-msg-agent')
    .locator('div')
    .locator('span')
    .locator('span')
    .innerHTML();
  expect(agentMsg).toBe('Hello Customer');
});
