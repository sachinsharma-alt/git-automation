import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.beowned.com/seller/listings/create?step=furnish_items');
  
});