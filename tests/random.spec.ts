import { test, expect } from '@playwright/test';

test('BeOwned button test', async ({ page }) => {

  await page.goto('https://uat.beowned.com/', {
    waitUntil: 'networkidle'
  });

  // Give React/Next.js time to hydrate
  await page.waitForTimeout(5000);

  const searchButton = page.getByRole('button', { name: 'Search' });

  console.log('Visible:', await searchButton.isVisible());
  console.log('Enabled:', await searchButton.isEnabled());

  await searchButton.click();

  await page.waitForTimeout(2000);
});