// How to handle multiple window at the same time

var {test} = require ('@playwright/test');

test("Handle Multiple Pages", async function ({browser}){
    const context = await browser.newContext();
    const page = await context.newPage();
    // Your test code here


await page.goto("https://www.facebook.com/");

console.log(await page.title());

const [newPage] = await Promise.all(

    [context.waitForEvent('page'), await page.locator("//a[text()='Meta Store']").click()  ]

    [convertProcessSignalToExitCode.waitForEvent('page'), await page.locator("")]
)
 
await page.waitForTimeout(3000);
console.log(await newPage.title());

console.log(await page.title());








await page.pause();


})