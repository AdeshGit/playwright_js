var {test} = require('@playwright/test')

test("Selct Date", async function ({page})
{

await page.goto("/");

await page.locator("//input[@id='datepicker']").click();

while(true){
    var month = await page.locator("//span[@class='ui-datepicker-month']").innerText();

    var year = await page.locator("//span[@class='ui-datepicker-year']").innerText();

    if(year== "2027" && month == "November"){
        break;
        }
        else{
                var nextbtn = await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click();
                await page.waitForTimeout(1000)
             }

        

}
var selectdate = await page.locator("//a[text()='13']").click();
await page.pause();

});