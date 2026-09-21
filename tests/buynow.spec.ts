import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.beowned.com/');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'ruby appartment ruby' }).click();
  await page.getByRole('button', { name: 'Buy now' }).first().click();
  await page.getByRole('textbox', { name: 'Email Id or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email Id or mobile number' }).fill('ashwin@beowned.com');
  await page.getByRole('textbox', { name: 'Password Show password' }).click();
  await page.getByRole('textbox', { name: 'Password Show password' }).fill('Ashwin@2oo7');
  await page.getByRole('textbox', { name: 'Password Show password' }).press('Enter');
  await page.getByRole('checkbox', { name: 'I hereby confirm to receive \'' }).check();
  await page.getByRole('checkbox', { name: 'I agree to the Terms and' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Confirm Offer', exact: true }).click();
});