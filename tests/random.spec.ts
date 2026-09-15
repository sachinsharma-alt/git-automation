import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.beowned.com/');
  await page.getByRole('button', { name: 'Sell' }).click();
  await page.getByRole('combobox', { name: 'Property Address' }).click();
  await page.getByRole('combobox', { name: 'Property Address' }).fill('ananta tower');
  await page.getByRole('combobox', { name: 'Property Address' }).press('ArrowDown');
  await page.getByRole('option', { name: 'Ananta Towers Phase 2 CIDCO' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('User LoginHey! Login to your existing account.PasswordOTP LoginEmail Id or').click();
  await page.getByRole('textbox', { name: 'Email Id or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email Id or mobile number' }).fill('Sachin.sharma@beowned.com');
  await page.getByRole('textbox', { name: 'Password Show password' }).click();
  await page.getByRole('textbox', { name: 'Password Show password' }).fill('Sachin@2oo4');
  await page.getByRole('button', { name: 'Show password' }).click();
  await page.getByText('Login', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.goto('https://uat.beowned.com/seller/listings/create?step=photos');
  await page.getByRole('button', { name: 'Add Image' }).click();
});