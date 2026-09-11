// Date : 26 Aug 2026

var {test} = require('@playwright/test');

test("Keyboard Test",async function ({page}){

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[@name='start']").click();

    await page.locator("//button[text()='Point Me']").hover();

    await page.locator("//p[text()='Drag me to my target']").dragTo(page.locator("//p[text()='Drop here']"));

    // How to handle the DDL without Keyboard Action

    //1. If we want to select option using value
   var countryddl=  await page.locator("//select[@id='country']");

    
    countryddl.selectOption("japan");
    page.waitForTimeout(2000);
    // 2. Using Index

    countryddl.selectOption({index:4});
    page.waitForTimeout(2000);
    // 3. Using Label 

    countryddl.selectOption({label:"India"});

    
    await page.pause();



})