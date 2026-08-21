import { test, expect } from '@playwright/test';
test('tc1', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect.any(page).toHaveTitle(/testautomationpractice/);
});



