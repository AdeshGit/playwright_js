var {test}= require('@playwright/test');

test("Table Operations", async function({page}){

  await  page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("//button[@name='start']").click();

  // 1. Locate table and count rows directly
  const table = page.locator("//table[@name='BookTable']");
  const rows = table.locator("tr");
  const rowCount = await rows.count();
  
  console.log("rows = " + rowCount);
  
  // 2. Iterate through rows using row count
  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);
    const cols = row.locator("td,th");
    const colCount = await cols.count();
      var output ="";
    console.log("Row " + i + " has " + colCount + " columns");

    var output ="";

    for(var j=0;j<await cols.count;j++)
    {
       output+= await cols.nth(j).innerText() + " | "
  
    }
  
    console.log(output);

  }
  



  

page.pause();



})
