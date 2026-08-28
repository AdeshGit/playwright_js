
var {test} = require('@playwright/test');

test ("Test Orange HRM", async function({page}){

await page.goto("https://www.saucedemo.com/");
// Login page
await page.locator("//input[@name='user-name']").fill("standard_user");
await page.locator("//input[@name='password']").fill("secret_sauce");
await page.waitForTimeout(2000);
await page.locator("//input[@name='login-button']").click();

// Products page
await page.locator("//div[text()='Sauce Labs Backpack']").click();
//Detail Page
await page.locator("//button[@name='add-to-cart']").click();

await page.locator("//a[@class='shopping_cart_link']").click();
await page.waitForTimeout(2000);
//Remove
await page.locator("//button[text()='Remove']").click();

//checkout
await page.locator("//button[@name='checkout']").click();
await page.waitForTimeout(2000);
//firstName
await page.locator("//input[@name='firstName']").fill("standard_user");
await page.locator("//input[@name='lastName']").fill("secret_sauce");

await page.locator("//input[@name='postalCode']").fill("123456");

await page.waitForTimeout(2000);
await page.locator("//input[@name='continue']").click();

await page.pause();



}
)