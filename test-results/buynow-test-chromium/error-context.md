# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: buynow.spec.ts >> test
- Location: tests\buynow.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'I hereby confirm to receive \'' })

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
      - button "Login" [ref=e9] [cursor=pointer]
  - dialog "User login" [ref=e12]:
    - button "Close login" [ref=e13] [cursor=pointer]
    - paragraph [ref=e20]: Click. Buy. Relax
    - generic [ref=e21]:
      - generic [ref=e22]:
        - heading "User Login" [level=2] [ref=e23]
        - paragraph [ref=e24]: Hey! Login to your existing account.
      - generic [ref=e25]:
        - button "Password" [pressed] [ref=e26] [cursor=pointer]
        - button "OTP Login" [ref=e27] [cursor=pointer]
      - generic [ref=e28]:
        - generic [ref=e29]:
          - generic [ref=e33]: Email Id or mobile number
          - textbox "Email Id or mobile number" [ref=e34]: ashwin@beowned.com
        - generic [ref=e35]:
          - generic [ref=e39]: Password
          - textbox "Password Hide password" [ref=e40]:
            - /placeholder: Password
            - text: Ashwin@2oo7
          - button "Hide password" [active] [ref=e41] [cursor=pointer]
        - button "Forgot password?" [ref=e45] [cursor=pointer]
        - paragraph [ref=e46]: Invalid email/mobile or password.
        - button "Login" [ref=e47] [cursor=pointer]
        - paragraph [ref=e50]: Or login with
        - button "Google" [ref=e53] [cursor=pointer]
        - paragraph [ref=e54]:
          - text: Don't have an account?
          - button "Signup" [ref=e55] [cursor=pointer]
  - alert [ref=e56]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://uat.beowned.com/');
  5  |   await page.getByRole('button', { name: 'Search' }).click();
  6  |   await page.getByRole('link', { name: 'ruby appartment ruby' }).click();
  7  |   await page.getByRole('button', { name: 'Buy now' }).first().click();
  8  |   await page.getByRole('textbox', { name: 'Email Id or mobile number' }).click();
  9  |   await page.getByRole('textbox', { name: 'Email Id or mobile number' }).fill('ashwin@beowned.com');
  10 |   await page.getByRole('textbox', { name: 'Password Show password' }).click();
  11 |   await page.getByRole('textbox', { name: 'Password Show password' }).fill('Ashwin@2oo7');
  12 |   await page.getByRole('textbox', { name: 'Password Show password' }).press('Enter');
> 13 |   await page.getByRole('checkbox', { name: 'I hereby confirm to receive \'' }).check();
     |                                                                                ^ Error: locator.check: Test timeout of 30000ms exceeded.
  14 |   await page.getByRole('checkbox', { name: 'I agree to the Terms and' }).check();
  15 |   await page.getByRole('button', { name: 'Next' }).click();
  16 |   await page.getByRole('button', { name: 'Next' }).click();
  17 |   await page.getByRole('button', { name: 'Next' }).click();
  18 |   await page.getByRole('button', { name: 'Confirm Offer', exact: true }).click();
  19 | });
```