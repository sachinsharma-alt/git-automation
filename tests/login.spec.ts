import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.beowned.com/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email Id or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email Id or mobile number' }).fill('TEST_EMAIL');
  await page.getByRole('textbox', { name: 'Password Show password' }).click();
  await page.getByRole('textbox', { name: 'Password Show password' }).fill('TEST_PASSWORD');
  await page.getByRole('button', { name: 'Show password' }).click();
  await page.getByText('Login', { exact: true }).click();
});
