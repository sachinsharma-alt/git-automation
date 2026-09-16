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
  await page.getByRole('radio', { name: 'Residential' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Select Apartment/Flat' }).click();
  await page.getByRole('textbox', { name: 'Property Name' }).click();
  await page.getByRole('textbox', { name: 'Property Name' }).fill('Ananta Tower');
  await page.getByRole('textbox', { name: 'Unit / Flat Number' }).click();
  await page.getByRole('textbox', { name: 'Unit / Flat Number' }).fill('302');
  // BHK dropdown
// 3. BHK
await page.locator('#mui-component-select-bhk').click();
await page.getByRole('option').first().click();


// 4. Floor Number
await page.locator('#mui-component-select-floorNumber').click();
await page.getByRole('option').first().click();


// 5. Total Floors
await page.locator('#mui-component-select-totalFloors').click();
await page.getByRole('option').first().click();


// 6. Furnishing
await page.locator('#mui-component-select-furnishing').click();
await page.getByRole('option').first().click();


// 7. Number Of Bathroom(s)
await page.locator('#mui-component-select-bathrooms').click();
await page.getByRole('option').first().click();


// 8. Built-up Area
await page.locator('input[name="builtupArea"]').fill('1210');


// 9. Carpet Area
await page.locator('input[name="carpetArea"]').fill('968');


// 10. Property Condition
await page.locator('#mui-component-select-propertyCondition').click();
await page.getByRole('option').first().click();


// 11. Number of Balconies
await page.locator('#mui-component-select-balconies').click();
await page.getByRole('option').first().click();


// 12. Lift/Elevator
await page.locator('#mui-component-select-elevator').click();
await page.getByRole('option').first().click();


// 13. Gas Pipeline
await page.locator('#mui-component-select-gasPipeline').click();
await page.getByRole('option').first().click();


// 14. Built Year
await page.locator('#mui-component-select-builtYear').click();
await page.getByRole('option').first().click();


// 15. Water Supply
await page.locator('#mui-component-select-waterSupply').click();
await page.getByRole('option').first().click();


// 16. Parking Type
await page.locator('#mui-component-select-parking').click();
await page.getByRole('option').first().click();


// 17. Number of Parking
await page.locator('#mui-component-select-numberOfParking').click();
await page.getByRole('option').first().click();


// 18. Facing
await page.locator('#mui-component-select-facing').click();
await page.getByRole('option').first().click();


// 19. Occupancy Status
await page.locator('#mui-component-select-occupancyStatus').click();
await page.getByRole('option').first().click();

// 20. Available From
await page.locator('input[name="availableFrom"]').fill('2026-10-01');

// 21. Description
await page.locator('input[name="description"]').fill('Well-maintained property in Ananta Tower.');

  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('checkbox', { name: '2 Wheeler Parking' }).check();
  await page.getByRole('button', { name: 'Next' }).click();

// 1. Are You The Owner?
await page.locator('#mui-component-select-isOwner').click();
await page.getByRole('option', { name: 'Yes', exact: true }).click();


// When Are You Selling?
await page.locator('#mui-component-select-sellingTimeline').click();
await page
  .getByRole('option', { name: 'Within 1 month', exact: true })
  .click();

// Why Are You Selling?
await page.locator('#mui-component-select-sellingReason').click();
await page
  .getByRole('option', { name: 'Buying another property', exact: true })
  .click();

// RERA ID
await page.locator('input[name="reraId"]').fill('RERA123456');

// Additional Information
await page
  .locator('input[name="additionalInformation"]')
  .fill('This is additional information about the property.');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByText('Skip For Now').click();
  await page.getByText('Skip For Now').click();

  await page.getByRole('textbox', { name: 'Price' }).click();
  await page.getByRole('textbox', { name: 'Price' }).fill('₹9,00,0000');
  await page.getByRole('checkbox', { name: 'Price negotiable' }).check();
  await page.getByRole('checkbox', { name: 'Including taxes' }).check();
  await page.getByRole('checkbox', { name: 'Excluding taxes' }).check();
  await page.locator('div').nth(4).click();
  await page.getByRole('checkbox', { name: 'I agree to pay additional' }).check();
  await page.getByRole('checkbox', { name: 'I agree to Terms & Condition' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Living Room' }).click();
  await page.getByText('+ Add another item').first().click();
  await page.getByPlaceholder('Type').click();
  await page.getByPlaceholder('Type').fill('TV');

  await page.getByRole('textbox', { name: 'Furnish Description' }).click();
  await page.getByRole('textbox', { name: 'Furnish Description' }).fill('Unfurnished');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('Skip For NowNext').click();
  await page.getByRole('button', { name: 'Skip For Now' }).click();
  await page.getByRole('link', { name: 'Go to MyListing' }).click();
});
