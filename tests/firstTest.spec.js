var {test} = require('@playwright/test');

test("First Test case",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin@123");
    await page.pause();



})