



var{test} = require('@playwright/test');

test ("Second Test",async function({page}){
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@placeholder='Enter Name']").fill("Adesh Jadhav");

    await page.locator("//input[@placeholder='Enter EMail']").fill("adesh@ashvasoft.in");

    await page.locator("//input[@placeholder='Enter Phone']").fill("7834567834");

    await page.locator("//input[@placeholder='Enter Phone']").fill("7834567834");

    await page.locator("//textarea[@id='textarea']").fill("At Kolhapur, Maharashtra");
   

    await page.pause();

})