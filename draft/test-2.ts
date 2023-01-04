import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dunamikoslab.zendesk.com/access/unauthenticated');
  await page.goto(
    'https://dunamikoslab.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fdunamikoslab.zendesk.com%2F&theme=hc&locale=1&auth_origin=%2Cfalse%2Ctrue'
  );
  await page.getByLabel('Email').fill('roger@dunamikoslab.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password').fill('makanayampenyet');
  await page.getByLabel('Password').press('Tab');
  await page.getByRole('button', { name: 'Sign in' }).press('Enter');
  await page
    .getByText(
      'WidgetEmbed and customize the widget on your website.Manage widget'
    )
    .click();
  await page.getByTitle('Visitors').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[data-test-id="VisitorSimulateButton"]').click();
  const page1 = await page1Promise;
  await page.getByText('Invisible').first().click();
  await page.getByText('Invisible').first().click();
  await page.getByText('Invisible').first().click();
  await page
    .locator(
      '.react_meshim_dashboard_components_navBar_navMenu_StatusIndicator-online > div'
    )
    .click();
  await page1
    .frameLocator(
      'internal:attr=[title="Opens a widget where you can chat to one of our agents"i]'
    )
    .getByTestId('message-field')
    .click();
  await page1
    .frameLocator(
      'internal:attr=[title="Opens a widget where you can chat to one of our agents"i]'
    )
    .getByTestId('message-field')
    .fill('hello');
  await page1
    .frameLocator(
      'internal:attr=[title="Opens a widget where you can chat to one of our agents"i]'
    )
    .getByTestId('message-field')
    .press('Enter');
  await page.getByText('Serve 1 request').click();
  await page.locator('[data-test-id="chatTextArea"]').click();
  await page.locator('[data-test-id="chatTextArea"]').fill('hello');
  await page.locator('[data-test-id="chatTextArea"]').press('Enter');
  await page.locator('[id="___\\$_1087__end_button"]').click();
  await page.locator('[data-test-id="endChatBtn"]').click();
});
