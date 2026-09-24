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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Type').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - button "Beowned home" [ref=e3] [cursor=pointer]:
      - img "Beowned" [ref=e4]
    - generic [ref=e5]:
      - button "DashboardIcon Get In Touch" [ref=e6] [cursor=pointer]:
        - img "DashboardIcon" [ref=e7]
        - generic [ref=e8]: Get In Touch
      - link "DashboardIcon Dashboard" [ref=e9] [cursor=pointer]:
        - /url: /seller/dashboard
        - img "DashboardIcon" [ref=e10]
        - generic [ref=e11]: Dashboard
      - link "Profile" [ref=e12] [cursor=pointer]:
        - /url: /seller/profile
  - main [ref=e17]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - link "Back" [ref=e21] [cursor=pointer]:
          - /url: /seller/listings/create?step=pricing&property_id=f4f12887-d19e-4de8-a15e-a4c7f6b03b21&property_subtype=apartment-flat&property_type=residential
        - generic [ref=e25]:
          - heading "Which items are included with your property?" [level=1] [ref=e26]
          - paragraph [ref=e27]: Select the items you’re including with the property.
      - form "Property Furnishing information" [ref=e29]:
        - generic [ref=e30]:
          - progressbar "Property listing progress" [ref=e31]
          - generic [ref=e33]: 57%
        - generic [ref=e34]:
          - generic [ref=e36]:
            - heading [level=3] [ref=e37]:
              - button "Living Room" [expanded] [ref=e38] [cursor=pointer]
            - region [ref=e47]:
              - generic [ref=e48]: + Add another item
          - generic [ref=e53]:
            - heading [level=3] [ref=e54]:
              - button "Bedroom" [expanded] [ref=e55] [cursor=pointer]
            - region [ref=e64]:
              - generic [ref=e65]: + Add another item
          - heading [level=3] [ref=e71]:
            - button "Kitchen" [ref=e72] [cursor=pointer]
          - heading [level=3] [ref=e80]:
            - button "Bathroom" [ref=e81] [cursor=pointer]
          - heading [level=3] [ref=e89]:
            - button "Balcony" [ref=e90] [cursor=pointer]
          - heading [level=3] [ref=e98]:
            - button "Other" [ref=e99] [cursor=pointer]
          - generic [ref=e105]:
            - generic [ref=e106]:
              - generic [ref=e107]: Furnish Description
              - generic [ref=e109]:
                - textbox "Furnish Description" [ref=e110]:
                  - /placeholder: ex. tv 32 inch, fridge 2 liter, washahing mavhind AC 2 ton etc.
                - group [aria-hidden]
            - generic [ref=e111]: 0/500
        - button "Next" [ref=e112] [cursor=pointer]
  - alert [ref=e116]
```

# Test source

```ts
  64  | 
  65  |   // 11. Number of Balconies
  66  |   await page.locator('#mui-component-select-balconies').click();
  67  |   await page.getByRole('option').first().click();
  68  | 
  69  | 
  70  |   // 12. Lift/Elevator
  71  |   await page.locator('#mui-component-select-elevator').click();
  72  |   await page.getByRole('option').first().click();
  73  | 
  74  | 
  75  |   // 13. Gas Pipeline
  76  |   await page.locator('#mui-component-select-gasPipeline').click();
  77  |   await page.getByRole('option').first().click();
  78  | 
  79  | 
  80  |   // 14. Built Year
  81  |   await page.locator('#mui-component-select-builtYear').click();
  82  |   await page.getByRole('option').first().click();
  83  | 
  84  | 
  85  |   // 15. Water Supply
  86  |   await page.locator('#mui-component-select-waterSupply').click();
  87  |   await page.getByRole('option').first().click();
  88  | 
  89  | 
  90  |   // 16. Parking Type
  91  |   await page.locator('#mui-component-select-parking').click();
  92  |   await page.getByRole('option').first().click();
  93  | 
  94  | 
  95  |   // 17. Number of Parking
  96  |   await page.locator('#mui-component-select-numberOfParking').click();
  97  |   await page.getByRole('option').first().click();
  98  | 
  99  | 
  100 |   // 18. Facing
  101 |   await page.locator('#mui-component-select-facing').click();
  102 |   await page.getByRole('option').first().click();
  103 | 
  104 | 
  105 |   // 19. Occupancy Status
  106 |   await page.locator('#mui-component-select-occupancyStatus').click();
  107 |   await page.getByRole('option').first().click();
  108 | 
  109 |   // 20. Available From
  110 |   await page.locator('input[name="availableFrom"]').fill('2026-10-01');
  111 | 
  112 |   // 21. Description
  113 |   await page.locator('input[name="description"]').fill('Well-maintained property in Ananta Tower.');
  114 | 
  115 |   await page.getByRole('button', { name: 'Next' }).click();
  116 |   await page.getByRole('checkbox', { name: '2 Wheeler Parking' }).check();
  117 |   await page.getByRole('button', { name: 'Next' }).click();
  118 | 
  119 |   // 1. Are You The Owner?
  120 |   await page.locator('#mui-component-select-isOwner').click();
  121 |   await page.getByRole('option', { name: 'Yes', exact: true }).click();
  122 | 
  123 | 
  124 |   // When Are You Selling?
  125 |   await page.locator('#mui-component-select-sellingTimeline').click();
  126 |   await page
  127 |     .getByRole('option', { name: 'Within 1 month', exact: true })
  128 |     .click();
  129 | 
  130 |   // Why Are You Selling?
  131 |   await page.locator('#mui-component-select-sellingReason').click();
  132 |   await page
  133 |     .getByRole('option', { name: 'Buying another property', exact: true })
  134 |     .click();
  135 | 
  136 |   // RERA ID
  137 |   await page.locator('input[name="reraId"]').fill('RERA123456');
  138 | 
  139 |   // Additional Information
  140 |   await page
  141 |     .locator('input[name="additionalInformation"]')
  142 |     .fill('This is additional information about the property.');
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
  158 | 
  159 |   // Current app shows the furnishing form on one screen and the description is required.
  160 |   // Living Room — 1st "Type" field (index 0)
  161 |   // Living Room — 1st "Type" field (index 0)
  162 |   await page.getByRole('button', { name: 'Living Room' }).click();
  163 |   await page.getByText('+ Add another item').first().click();
> 164 |   await page.getByPlaceholder('Type').first().click();
      |                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  165 |   await page.getByPlaceholder('Type').first().fill('Sofa');
  166 | 
  167 |   // Bedroom — 2nd "Type" field (index 1)
  168 |   await page.getByRole('button', { name: 'Bedroom' }).click();
  169 |   await page.getByText('+ Add another item').nth(1).click();
  170 |   await page.getByPlaceholder('Type').nth(1).click();
  171 |   await page.getByPlaceholder('Type').nth(1).fill('TV ,Bed');
  172 | 
  173 |   // Kitchen — 3rd "Type" field (index 2)
  174 |   await page.getByRole('button', { name: 'Kitchen' }).click();
  175 |   await page.getByText('+ Add another item').nth(2).click();
  176 |   await page.getByPlaceholder('Type').nth(2).click();
  177 |   await page.getByPlaceholder('Type').nth(2).fill('Fridge');
  178 | 
  179 |   // Bathroom — 4th "Type" field (index 3)
  180 |   await page.getByRole('button', { name: 'Bathroom' }).click();
  181 |   await page.getByText('+ Add another item').nth(3).click();
  182 |   await page.getByPlaceholder('Type').nth(3).click();
  183 |   await page.getByPlaceholder('Type').nth(3).fill('mirror');
  184 | 
  185 |   // Balcony — 5th "Type" field (index 4), continue the same pattern
  186 |   await page.getByRole('button', { name: 'Balcony' }).click();
  187 |   await page.getByText('+ Add another item').nth(4).click();
  188 |   await page.getByPlaceholder('Type').nth(4).click();
  189 |   await page.getByPlaceholder('Type').nth(4).fill('PLANTS'); // your value here   WORKING TILL HERE 
  190 | 
  191 |   await page.getByRole('button', { name: 'Other' }).click();
  192 |   await page.getByText('+ Add another item').nth(5).click();
  193 |   await page.getByPlaceholder('Type').nth(5).click();
  194 |   await page.getByPlaceholder('Type').nth(5).fill('paintings');
  195 |   await page.getByRole('textbox', { name: 'Furnish Description' }).fill('TV, Fridge, Washing Machine, AC');
  196 |   await page.getByRole('button', { name: 'Next' }).click();
  197 | 
  198 |   // The current listing flow routes to the property documentation step before the final
  199 |   // listing confirmation screen. Skip it so the test can reach the final My Listings CTA.
  200 |   await page.getByRole('button', { name: 'Skip For Now' }).click();
  201 | 
  202 |   const myListingLink = page.getByRole('link', { name: /Go to My ?Listing/i });
  203 |   await expect(myListingLink).toBeVisible({ timeout: 30000 });
  204 |   await myListingLink.click();
  205 | });
```