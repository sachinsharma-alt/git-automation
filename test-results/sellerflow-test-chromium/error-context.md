# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sellerflow.spec.ts >> test
- Location: tests\sellerflow.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Which items are included with your property?')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Which items are included with your property?') with timeout 20000ms
  - waiting for getByText('Which items are included with your property?')
  - Test timeout of 30000ms exceeded.

```

```yaml
- banner:
  - button "Beowned home":
    - img "Beowned"
  - button "DashboardIcon Get In Touch":
    - img "DashboardIcon"
    - text: Get In Touch
  - link "DashboardIcon Dashboard":
    - /url: /seller/dashboard
    - img "DashboardIcon"
    - text: Dashboard
  - link "Profile":
    - /url: /seller/profile
- main:
  - region "Success!":
    - heading "Success!" [level=1]
    - list:
      - listitem: Your property details have been submitted successfully and are under review.
      - listitem: You can check your dashboard for the review status at any time.
    - img "Residential property"
    - img "logo"
    - text: Click. Sell. Relax
    - link "Go to MyListing":
      - /url: /seller/listings
- alert
```

# Test source

```ts
  63  | 
  64  | 
  65  | // 11. Number of Balconies
  66  | await page.locator('#mui-component-select-balconies').click();
  67  | await page.getByRole('option').first().click();
  68  | 
  69  | 
  70  | // 12. Lift/Elevator
  71  | await page.locator('#mui-component-select-elevator').click();
  72  | await page.getByRole('option').first().click();
  73  | 
  74  | 
  75  | // 13. Gas Pipeline
  76  | await page.locator('#mui-component-select-gasPipeline').click();
  77  | await page.getByRole('option').first().click();
  78  | 
  79  | 
  80  | // 14. Built Year
  81  | await page.locator('#mui-component-select-builtYear').click();
  82  | await page.getByRole('option').first().click();
  83  | 
  84  | 
  85  | // 15. Water Supply
  86  | await page.locator('#mui-component-select-waterSupply').click();
  87  | await page.getByRole('option').first().click();
  88  | 
  89  | 
  90  | // 16. Parking Type
  91  | await page.locator('#mui-component-select-parking').click();
  92  | await page.getByRole('option').first().click();
  93  | 
  94  | 
  95  | // 17. Number of Parking
  96  | await page.locator('#mui-component-select-numberOfParking').click();
  97  | await page.getByRole('option').first().click();
  98  | 
  99  | 
  100 | // 18. Facing
  101 | await page.locator('#mui-component-select-facing').click();
  102 | await page.getByRole('option').first().click();
  103 | 
  104 | 
  105 | // 19. Occupancy Status
  106 | await page.locator('#mui-component-select-occupancyStatus').click();
  107 | await page.getByRole('option').first().click();
  108 | 
  109 | // 20. Available From
  110 | await page.locator('input[name="availableFrom"]').fill('2026-10-01');
  111 | 
  112 | // 21. Description
  113 | await page.locator('input[name="description"]').fill('Well-maintained property in Ananta Tower.');
  114 | 
  115 |   await page.getByRole('button', { name: 'Next' }).click();
  116 |   await page.getByRole('checkbox', { name: '2 Wheeler Parking' }).check();
  117 |   await page.getByRole('button', { name: 'Next' }).click();
  118 | 
  119 | // 1. Are You The Owner?
  120 | await page.locator('#mui-component-select-isOwner').click();
  121 | await page.getByRole('option', { name: 'Yes', exact: true }).click();
  122 | 
  123 | 
  124 | // When Are You Selling?
  125 | await page.locator('#mui-component-select-sellingTimeline').click();
  126 | await page
  127 |   .getByRole('option', { name: 'Within 1 month', exact: true })
  128 |   .click();
  129 | 
  130 | // Why Are You Selling?
  131 | await page.locator('#mui-component-select-sellingReason').click();
  132 | await page
  133 |   .getByRole('option', { name: 'Buying another property', exact: true })
  134 |   .click();
  135 | 
  136 | // RERA ID
  137 | await page.locator('input[name="reraId"]').fill('RERA123456');
  138 | 
  139 | // Additional Information
  140 | await page
  141 |   .locator('input[name="additionalInformation"]')
  142 |   .fill('This is additional information about the property.');
  143 |   await page.getByRole('button', { name: 'Next' }).click();
  144 | 
  145 |   await page.getByText('Skip For Now').click();
  146 |   await page.getByText('Skip For Now').click();
  147 | 
  148 |   await page.getByRole('textbox', { name: 'Price' }).click();
  149 |   await page.getByRole('textbox', { name: 'Price' }).fill('₹9,00,0000');
  150 |   await page.getByRole('checkbox', { name: 'Price negotiable' }).check();
  151 |   await page.getByRole('checkbox', { name: 'Including taxes' }).check();
  152 |   await page.getByRole('checkbox', { name: 'Excluding taxes' }).check();
  153 |   await page.locator('div').nth(4).click();
  154 |   await page.getByRole('checkbox', { name: 'I agree to pay additional' }).check();
  155 |   await page.getByRole('checkbox', { name: 'I agree to Terms & Condition' }).check();
  156 |   await page.getByRole('button', { name: 'Next' }).click();
  157 | 
  158 |   // Property documentation page appears after pricing; skip it to continue.
  159 |   await expect(page.getByRole('button', { name: /Skip For Now/i })).toBeVisible({ timeout: 20000 });
  160 |   await page.getByRole('button', { name: /Skip For Now/i }).click();
  161 | 
  162 |   // Current app shows the furnishing form on one screen and the description is required.
> 163 |   await expect(page.getByText('Which items are included with your property?')).toBeVisible({ timeout: 20000 });
      |                                                                                ^ Error: expect(locator).toBeVisible() failed
  164 |   await page.getByRole('combobox', { name: 'Kitchen' }).selectOption({ label: 'Kitchen' });
  165 |   await page.getByRole('combobox', { name: 'Bathroom' }).selectOption({ label: 'Bathroom' });
  166 |   await page.getByRole('combobox', { name: 'Balcony' }).selectOption({ label: 'Balcony' });
  167 |   await page.getByRole('combobox', { name: 'Other' }).selectOption({ label: 'Other' });
  168 |   await page.getByRole('textbox', { name: 'Furnish Description' }).fill('unfurnished');
  169 |   await page.getByRole('button', { name: 'Next' }).click();
  170 |   await page.getByText('Skip For Now').click();
  171 |   await page.getByRole('link', { name: 'Go to MyListing' }).click();
  172 | });
```