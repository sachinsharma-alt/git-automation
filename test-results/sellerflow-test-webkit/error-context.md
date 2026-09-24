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
  - waiting for locator('#mui-component-select-occupancyStatus')
    - locator resolved to <div tabindex="0" role="combobox" aria-expanded="false" aria-haspopup="listbox" id="mui-component-select-occupancyStatus" class="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input mui-mp9f0v">…</div>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - link "Back" [ref=e21]:
          - /url: /seller/listings/create?step=category&property_id=d43bc378-7134-4fa6-b4cc-c2f95c938b68&property_subtype=apartment-flat&property_type=residential
        - generic [ref=e25]:
          - heading "Details of the property that you are selling" [level=1] [ref=e26]
          - paragraph [ref=e27]: Let us know about the details and type of your property for further process.
      - form "Property details" [ref=e29]:
        - generic [ref=e30]:
          - progressbar "Property listing progress" [ref=e31]
          - generic [ref=e33]: 29%
        - generic [ref=e34]:
          - generic [ref=e36]:
            - generic [ref=e37]: Property Name *
            - generic [ref=e39]:
              - textbox "Property Name" [ref=e40]:
                - /placeholder: Enter property name
                - text: 24th sep test
              - group [aria-hidden]
          - generic [ref=e42]:
            - generic [ref=e43]: Unit / Flat Number *
            - generic [ref=e45]:
              - textbox "Unit / Flat Number" [ref=e46]:
                - /placeholder: Type
                - text: "302"
              - group [aria-hidden]
          - generic [ref=e48]:
            - generic [ref=e49]: BHK *
            - generic [ref=e51]:
              - combobox [ref=e52] [cursor=pointer]: 2 BHK
              - textbox [aria-hidden]: "2"
              - group [aria-hidden]
          - generic [ref=e54]:
            - generic [ref=e55]: Floor Number *
            - generic [ref=e57]:
              - combobox [ref=e58] [cursor=pointer]: Ground Floor
              - textbox [aria-hidden]: "0"
              - group [aria-hidden]
          - generic [ref=e60]:
            - generic [ref=e61]: Total Floors *
            - generic [ref=e63]:
              - combobox [ref=e64] [cursor=pointer]: "1"
              - textbox [aria-hidden]: "1"
              - group [aria-hidden]
          - generic [ref=e66]:
            - generic [ref=e67]: Furnishing *
            - generic [ref=e69]:
              - combobox [ref=e70] [cursor=pointer]: Fully Furnished
              - textbox [aria-hidden]: fully-furnished
              - group [aria-hidden]
          - generic [ref=e72]:
            - generic [ref=e73]: Number Of Bathroom(s) *
            - generic [ref=e75]:
              - combobox [ref=e76] [cursor=pointer]: "1"
              - textbox [aria-hidden]: "1"
              - group [aria-hidden]
          - generic [ref=e78]:
            - generic [ref=e79]: Built-up Area (in sqft) *
            - generic [ref=e81]:
              - textbox "Built-up Area (in sqft)" [ref=e82]:
                - /placeholder: Type
                - text: "1210"
              - group [aria-hidden]
          - generic [ref=e84]:
            - generic [ref=e85]: Carpet Area (in sqft) *
            - generic [ref=e87]:
              - textbox "Carpet Area (in sqft)" [ref=e88]:
                - /placeholder: Type
                - text: "968"
              - group [aria-hidden]
          - generic [ref=e90]:
            - generic [ref=e91]: Property Condition *
            - generic [ref=e93]:
              - combobox [ref=e94] [cursor=pointer]: New
              - textbox [aria-hidden]: new
              - group [aria-hidden]
          - generic [ref=e96]:
            - generic [ref=e97]: Number of Balconies *
            - generic [ref=e99]:
              - combobox [ref=e100] [cursor=pointer]: "0"
              - textbox [aria-hidden]: "0"
              - group [aria-hidden]
          - generic [ref=e102]:
            - generic [ref=e103]: Lift/Elevator *
            - generic [ref=e105]:
              - combobox [ref=e106] [cursor=pointer]: Available
              - textbox [aria-hidden]: available
              - group [aria-hidden]
          - generic [ref=e108]:
            - generic [ref=e109]: Gas Pipeline *
            - generic [ref=e111]:
              - combobox [ref=e112] [cursor=pointer]: Available
              - textbox [aria-hidden]: available
              - group [aria-hidden]
          - generic [ref=e114]:
            - generic [ref=e115]: Built Year *
            - generic [ref=e117]:
              - combobox [ref=e118] [cursor=pointer]: "2026"
              - textbox [aria-hidden]: "2026"
              - group [aria-hidden]
          - generic [ref=e120]:
            - generic [ref=e121]: Water Supply *
            - generic [ref=e123]:
              - combobox [ref=e124] [cursor=pointer]: Available
              - textbox [aria-hidden]: available
              - group [aria-hidden]
          - generic [ref=e126]:
            - generic [ref=e127]: Parking Type *
            - generic [ref=e129]:
              - combobox [ref=e130] [cursor=pointer]: Covered Parking
              - textbox [aria-hidden]: Covered
              - group [aria-hidden]
          - generic [ref=e132]:
            - generic [ref=e133]: Number of Parking *
            - generic [ref=e135]:
              - combobox [ref=e136] [cursor=pointer]: "0"
              - textbox [aria-hidden]: "0"
              - group [aria-hidden]
          - generic [ref=e138]:
            - generic [ref=e139]: Facing *
            - generic [ref=e141]:
              - combobox [active] [ref=e142] [cursor=pointer]: East
              - textbox [aria-hidden]: East
              - group [aria-hidden]
          - generic [ref=e144]:
            - generic [ref=e145]: Occupancy Status *
            - generic [ref=e147]:
              - combobox [ref=e148] [cursor=pointer]:
                - generic [ref=e149]: Select
              - textbox [aria-hidden]
              - group [aria-hidden]
          - generic [ref=e151]:
            - generic [ref=e152]: Available From *
            - generic [ref=e154]:
              - textbox "Available From" [ref=e155]
              - group [aria-hidden]
          - generic [ref=e156]:
            - generic [ref=e157]:
              - generic [ref=e158]: Description (Optional)
              - generic [ref=e160]:
                - textbox "Description (Optional)" [ref=e161]:
                  - /placeholder: Type
                - group [aria-hidden]
            - generic [ref=e162]: 0/500
        - button "Next" [ref=e164] [cursor=pointer]
  - alert [ref=e168]
  - listbox [ref=e171]:
    - option [selected] [ref=e172] [cursor=pointer]: East
    - option [ref=e173] [cursor=pointer]: West
    - option [ref=e174] [cursor=pointer]: North
    - option [ref=e175] [cursor=pointer]: South
    - option [ref=e176] [cursor=pointer]: North East
    - option [ref=e177] [cursor=pointer]: North West
    - option [ref=e178] [cursor=pointer]: South East
    - option [ref=e179] [cursor=pointer]: South West
```

# Test source

```ts
  6   |   await page.getByRole('combobox', { name: 'Property Address' }).click();
  7   |   await page.getByRole('combobox', { name: 'Property Address' }).fill('ananta tower');
  8   |   await page.getByRole('combobox', { name: 'Property Address' }).press('ArrowDown');
  9   |   await page.getByRole('option', { name: 'Ananta Towers Phase 2 CIDCO' }).click();
  10  |   await page.getByRole('button', { name: 'Search' }).click();
  11  |   await page.getByText('User LoginHey! Login to your existing account.PasswordOTP LoginEmail Id or').click();
  12  |   await page.getByRole('textbox', { name: 'Email Id or mobile number' }).click();
  13  |   await page.getByRole('textbox', { name: 'Email Id or mobile number' }).fill('Sachin.sharma@beowned.com');
  14  |   await page.getByRole('textbox', { name: 'Password Show password' }).click();
  15  |   await page.getByRole('textbox', { name: 'Password Show password' }).fill('Sachin@2oo4');
  16  |   await page.getByRole('button', { name: 'Show password' }).click();
  17  |   await page.getByText('Login', { exact: true }).click();
  18  |   await page.getByRole('button', { name: 'Next' }).click();
  19  |   await page.getByRole('radio', { name: 'Residential' }).check();
  20  |   await page.getByRole('button', { name: 'Next' }).click();
  21  |   await page.getByRole('button', { name: 'Select Apartment/Flat' }).click();
  22  |   await page.getByRole('textbox', { name: 'Property Name' }).click();
  23  |   await page.getByRole('textbox', { name: 'Property Name' }).fill('24th sep test');
  24  |   await page.getByRole('textbox', { name: 'Unit / Flat Number' }).click();
  25  |   await page.getByRole('textbox', { name: 'Unit / Flat Number' }).fill('302');
  26  |   // BHK dropdown
  27  |   // 3. BHK
  28  |   await page.locator('#mui-component-select-bhk').click();
  29  |   await page.getByRole('option').nth(2).click();
  30  | 
  31  | 
  32  |   // 4. Floor Number
  33  |   await page.locator('#mui-component-select-floorNumber').click();
  34  |   await page.getByRole('option').first().click();
  35  | 
  36  | 
  37  |   // 5. Total Floors
  38  |   await page.locator('#mui-component-select-totalFloors').click();
  39  |   await page.getByRole('option').first().click();
  40  | 
  41  | 
  42  |   // 6. Furnishing
  43  |   await page.locator('#mui-component-select-furnishing').click();
  44  |   await page.getByRole('option').nth(0).click();
  45  | 
  46  | 
  47  |   // 7. Number Of Bathroom(s)
  48  |   await page.locator('#mui-component-select-bathrooms').click();
  49  |   await page.getByRole('option').first().click();
  50  | 
  51  | 
  52  |   // 8. Built-up Area
  53  |   await page.locator('input[name="builtupArea"]').fill('1210');
  54  | 
  55  | 
  56  |   // 9. Carpet Area
  57  |   await page.locator('input[name="carpetArea"]').fill('968');
  58  | 
  59  | 
  60  |   // 10. Property Condition
  61  |   await page.locator('#mui-component-select-propertyCondition').click();
  62  |   await page.getByRole('option').first().click();
  63  | 
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
> 106 |   await page.locator('#mui-component-select-occupancyStatus').click();
      |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  164 |   await page.getByPlaceholder('Type').first().click();
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