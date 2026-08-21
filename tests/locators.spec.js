// Locators 
// Types


import { test, expect } from '@playwright/test'
test('buitinLocators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo = page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    await page.locator('[name="username"]').fill('Admin');

    const username = page.getByText('username');
    await username.fill('Admin');



    await page.waitForTimeout(3000)

})