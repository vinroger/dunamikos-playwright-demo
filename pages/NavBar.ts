import { test, expect, Page, Locator } from '@playwright/test';

export type NavStatusType = 'invisible' | 'away' | 'online';

export class NavBar {
  readonly page: Page;
  readonly statusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.statusBar = page.getByText('Invisible').first();
  }

  async changeStatus(input: NavStatusType) {
    const selector = `.react_meshim_dashboard_components_navBar_navMenu_StatusIndicator-${input}`;
    await this.page
      .locator(
        '.react_meshim_dashboard_components_navBar_navMenu_StatusIndicator'
      )
      .click();
    await this.page.locator(selector).click();
  }

  async getStatus() {
    const status = await this.page.locator(
      '.react_meshim_dashboard_components_navBar_navMenu_StatusIndicator > span'
    );
    return status.innerHTML();
  }
}
