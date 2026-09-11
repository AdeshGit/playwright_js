const {test} = require('@playwright/test');

test("file Upload", async function({page}){

    await page.goto("https://testautomationpractice.blogspot.com/");
    //How to upload single file
    await page.locator("//button[@name='start']").click();
    await page.locator("//input[@id='singleFileInput']").setInputFiles("files/Resume (1).pdf");

    // Uplaod Multiple File 
    
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["files/Resume (1).pdf","files/शिवजयंती.png"])
    
    
    await page.pause();

})