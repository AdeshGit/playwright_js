var{test} = require('@playwright/test');

test ("Second Test",async function({page}){
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[@name='start']").click();

    await page.locator("//input[@placeholder='Enter Name']").fill("Adesh Jadhav");

    await page.locator("//input[@placeholder='Enter EMail']").fill("adesh@ashvasoft.in");

    await page.locator("//input[@placeholder='Enter Phone']").fill("7834567834");

    await page.locator("//input[@placeholder='Enter Phone']").fill("7834567834");

    await page.locator("//textarea[@id='textarea']").fill("At Kolhapur, Maharashtra");
   
    var result =   await page.locator("//input[@value='male']").click();
    console.log(result);
    await page.locator("//input[@value='female']").click();

    const weekdays =['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    for(const day of weekdays ){
       // await page.locator("//input[@value='{day}']).click();
        await page.locator(`//input[@value='${day}']`).check(); // ${...}. This is called string interpolation
    }
    await page.locator('#country').selectOption('india');
   
    await page.locator('#colors').selectOption('Yellow');
   


   // await page.locator("//button[@name='stop']").click();
    await page.pause();
   // await page.close();

})
