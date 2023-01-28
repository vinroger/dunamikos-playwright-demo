import { Locator, Page } from '@playwright/test';

export class ChatPage {
  readonly page: Page;
  visitorPage: Page | undefined;
  readonly widget: Locator;

  constructor(page: Page) {
    this.page = page;
    this.widget = page.locator('[data-garden-id="notifications.well"]');
  }
  async goto() {
    await this.page.goto('https://dunamikoslab.zendesk.com/chat/agent#home');
    await this.page.getByTitle('Visitors').click();
  }

  async simulateVisitor() {
    const visitorPagePromise = this.page.waitForEvent('popup');
    await this.page.locator('[data-test-id="VisitorSimulateButton"]').click();
    this.visitorPage = await visitorPagePromise;
  }

  async sendHelloAgent() {
    if (!this.visitorPage) {
      throw new Error('visitor page has not been initialized');
    }
    const visitorChatBox = this.visitorPage
      .frameLocator(
        'internal:attr=[title="Opens a widget where you can chat to one of our agents"i]'
      )
      .getByTestId('message-field');
    await visitorChatBox.click();
    await visitorChatBox.fill('Hello Agent!');
    await visitorChatBox.press('Enter');
  }

  async sendHelloCustomer() {
    await this.goto();
    await this.page.locator('[data-test-id="lastMsgCell"]').click();
    await this.page
      .locator('.jx_ui_html_div > div:nth-child(7) > div > .jx_ui_Widget')
      .click();
    await this.page
      .locator('[data-test-id="chatTextArea"]')
      .fill('Hello Customer');
    await this.page.locator('[data-test-id="chatTextArea"]').press('Enter');
    await this.page
      .locator('[data-test-id="chatTextArea"]')
      .press('Control+Enter');
  }

  async endChat() {
    await this.page.locator('[id="___\\$_1080__end_button"]').click();
    await this.page.locator('[data-test-id="endChatBtn"]').click();
  }
}
