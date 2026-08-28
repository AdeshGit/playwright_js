// Date : 25 Aug 2026

var {test} = require('@playwright/test');

test("Keyboard Test",async function ({page}){


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[@name='start']").click();

    await page.locator("//input[@placeholder='Enter Name']").fill("Adesh Jadhav");

    //console.log("Keyboard Action Started !");

    await page.keyboard.press("Meta+A");   // Selet All Text
    await page.keyboard.press("Meta+C");   // Copy
    await page.keyboard.press("Tab");              // Next Field

    await page.keyboard.press("Meta+V"); //Paste

    await page.keyboard.press("Tab");              // Next Field

    await page.keyboard.press("Meta+V"); //Paste
    await page.keyboard.press("Tab");              // Next Field

    await page.keyboard.press("Meta+V"); //Paste
    await page.keyboard.press("Tab");              // Next Field

   
    await page.pause();

})