import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dunamikoslab.zendesk.com/access/unauthenticated');
  await page.goto(
    'https://dunamikoslab.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fdunamikoslab.zendesk.com%2F&theme=hc&locale=1&auth_origin=%2Cfalse%2Ctrue'
  );
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('roger@dunamikoslab.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('makanayampenyet');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page
    .getByText(
      'WidgetEmbed and customize the widget on your website.Manage widget'
    )
    .click({
      button: 'right',
    });
  await page
    .getByText(
      'WidgetEmbed and customize the widget on your website.Manage widget'
    )
    .click();
  await page
    .getByText(
      'WidgetEmbed and customize the widget on your website.Manage widget'
    )
    .click();

    await expect(page.locator('.Well-zk7a8s-0')).toHaveCount(4);
});
