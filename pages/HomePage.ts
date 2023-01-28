import { test, expect, Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly widget: Locator;

  constructor(page: Page) {
    this.page = page;
    this.widget = page.locator('[data-garden-id="notifications.well"]');
  }

  async goto() {
    await this.page.goto('https://dunamikoslab.zendesk.com/chat/agent#home');
  }
}
