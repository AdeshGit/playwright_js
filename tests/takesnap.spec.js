const {test}= require('@playwright/test');

test("Take Screenshot", async function({page}){

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(2000);
    var timestamp = new Date().toISOString().replace(/[:.]/g,"-");

    await page.screenshot({Path:"Automation Practice "+ timestamp + " .png"})
    
    // Take Screenshot of Perticular Element

    await page.locator("//button[@name='start']").screenshot({path:"Start Button"+ timestamp+" .png"});


    await page.pause();

}); 