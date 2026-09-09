//How to handle Alerts in automation

var {test} = require('@playwright/test');

test ("Handle Simple Alerts", async function({page}){
    // Set up dialog handler BEFORE the action
    page.on('dialog', async dialog => {
        await page.waitForTimeout(2000);
        await dialog.accept();
    });

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[text()='Simple Alert']").click();
}
);

// Confirmation Alert
test ("Handle Confirmation Alert", async function({page}){
    // Set up dialog handler BEFORE the action
    page.on('dialog', async dialog => {
        await page.waitForTimeout(2000);
        await dialog.accept();
    });

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[text()='Confirmation Alert']").click();
}
);

//Prompt Alert
test("Handle Prompt Alert !", async function({page}) {
    // Set up dialog handler BEFORE the action
    page.on('dialog', async dialog => {
        await page.waitForTimeout(2000);
        await dialog.accept();
    });

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[text()='Prompt Alert']").click();
    
    // Optional: Add pause inside the test if needed
    await page.pause();
});