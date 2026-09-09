var {test} = require('@playwright/tests');

test("file Upload", async function({page}){

    await page.goto("https://testautomationpractice.blogspot.com/");
    //How to upload single file
    await page.locator("//button[@name='start']").click();
    await page.locator("//input[@id='singleFileInput']").setInputFiles("files/Resume (1).pdf");


    await page.pause();

})