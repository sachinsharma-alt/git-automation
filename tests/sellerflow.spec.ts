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
  await page.getByRole('textbox', { name: 'Property Name' }).fill('Mahavir test');
  await page.getByRole('textbox', { name: 'Unit / Flat Number' }).click();
  await page.getByRole('textbox', { name: 'Unit / Flat Number' }).fill('302');
  // BHK dropdown
  // 3. BHK
  await page.locator('#mui-component-select-bhk').click();
  await page.getByRole('option').nth(2).click();


  // 4. Floor Number
  await page.locator('#mui-component-select-floorNumber').click();
  await page.getByRole('option').first().click();


  // 5. Total Floors
  await page.locator('#mui-component-select-totalFloors').click();
  await page.getByRole('option').first().click();


  // 6. Furnishing
  await page.locator('#mui-component-select-furnishing').click();
  await page.getByRole('option').nth(0).click();


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


  // Current app shows the furnishing form on one screen and the description is required.
  // Living Room — 1st "Type" field (index 0)
  // Living Room — 1st "Type" field (index 0)
  await page.getByRole('button', { name: 'Living Room' }).click();
  await page.getByText('+ Add another item').first().click();
  await page.getByPlaceholder('Type').first().click();
  await page.getByPlaceholder('Type').first().fill('Sofa');

  // Bedroom — 2nd "Type" field (index 1)
  await page.getByRole('button', { name: 'Bedroom' }).click();
  await page.getByText('+ Add another item').nth(1).click();
  await page.getByPlaceholder('Type').nth(1).click();
  await page.getByPlaceholder('Type').nth(1).fill('TV ,Bed');

  // Kitchen — 3rd "Type" field (index 2)
  await page.getByRole('button', { name: 'Kitchen' }).click();
  await page.getByText('+ Add another item').nth(2).click();
  await page.getByPlaceholder('Type').nth(2).click();
  await page.getByPlaceholder('Type').nth(2).fill('Fridge');

  // Bathroom — 4th "Type" field (index 3)
  await page.getByRole('button', { name: 'Bathroom' }).click();
  await page.getByText('+ Add another item').nth(3).click();
  await page.getByPlaceholder('Type').nth(3).click();
  await page.getByPlaceholder('Type').nth(3).fill('mirror');

  // Balcony — 5th "Type" field (index 4), continue the same pattern
  await page.getByRole('button', { name: 'Balcony' }).click();
  await page.getByText('+ Add another item').nth(4).click();
  await page.getByPlaceholder('Type').nth(4).click();
  await page.getByPlaceholder('Type').nth(4).fill('PLANTS'); // your value here   WORKING TILL HERE 

  await page.getByRole('button', { name: 'Other' }).click();
  await page.getByText('+ Add another item').nth(5).click();
  await page.getByPlaceholder('Type').nth(5).click();
  await page.getByPlaceholder('Type').nth(5).fill('paintings');
  await page.getByPlaceholder('ex. tv 32 inch, fridge 2 liter, washahing mavhind AC 2 ton etc.').nth(5).click();
  await page.getByPlaceholder('ex. tv 32 inch, fridge 2 liter, washahing mavhind AC 2 ton etc.').nth(5).fill('TV, Fridge, Washing Machine, AC');




  await page.locator('div:nth-child(5) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root > .MuiGrid-root.MuiGrid-container > .MuiGrid-root > .PropertyAdditionalInfoPage-module__ImNWpG__furnishItemFieldWrapper').click();
  await page.locator('[id="_r_ap_"]').click();
  await page.locator('[id="_r_ap_"]').fill('Plants');
  await page.getByRole('button', { name: 'Other' }).click();
  await page.getByText('+ Add another item').nth(5).click();
  await page.locator('div:nth-child(6) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root > .MuiGrid-root.MuiGrid-container > .MuiGrid-root > .PropertyAdditionalInfoPage-module__ImNWpG__furnishItemFieldWrapper').click();
  await page.locator('[id="_r_aq_"]').click();
  await page.locator('[id="_r_aq_"]').fill('Jhumar');
  await page.getByRole('textbox', { name: 'Furnish Description' }).click();
  await page.getByRole('textbox', { name: 'Furnish Description' }).fill('Ac ');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByText('Skip For Now').click();
  await page.getByRole('link', { name: 'Go to MyListing' }).click();
});