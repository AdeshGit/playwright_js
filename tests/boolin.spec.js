var{test} = require('@playwright/test');

test ("Second Test",async function({page}){
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[@name='start']").click();


// ---- radio Button ---
    var listradiobtn = await page.locator("//input[@class='form-check-input' and @type='radio']")

    console.log(await listradiobtn.count());
    for(var i=0;i<await listradiobtn.count();i++){
        await listradiobtn.nth(i).check();
        await page.waitForTimeout(2000);
    }
//-----Check Box ----
    var listcheckbox = await page.locator("//input[@class='form-check-input' and @type='checkbox']");

    console.log(await listcheckbox.count());

    for(var i=0;i<await listcheckbox.count();i++){
        await listcheckbox.nth(i).click();
        await page.waitForTimeout(2000);
    }


    await page.pause();
})