// describe("vtiger login error msg",async ()=>{
//     it("launching the vtiger application",async()=>{
//         //launching the browser
//         await browser.url("http://localhost:8888/")
//         await browser.pause(3000)

//         //maximize the browser
//         await browser.maximizeWindow()

//         //getting the title of the page
//         console.log(await browser.getTitle());

//         //assertion: check whether the title fetched right 
//         await expect (browser).toHaveTitleContaining("vtiger CRM 5")

//     })
//     it("fetch errormsg",async ()=>{

//         //username = admin
//         const username = await $('//div//input[@name="user_name"]')
//         username.setValue("admin")
//         await browser.pause(3000)

//         //password = skd
//         const password = await $('//div//input[@name="user_password"]')
//         password.setValue("skd")
//         await browser.pause(3000)

//         //click on login button
//         const button = await $('//div//input[@id="submitButton"]')
//         button.click()
//         await browser.pause(3000)

//         //pause the execution
//         await browser.pause(3000)

//         //printing the error msg
//         const errormsg = await $("//div[@class='errorMessage']")
//         console.log(await errormsg.getText()); 
//         await browser.pause(3000)

//         //assertion: to check the error msg
//         await expect(errormsg).toHaveTextContaining("You must specify a valid")

//     })
// })


//by using wait until
describe("vtiger login error msg",async ()=>{
    it("launching the vtiger application",async()=>{
        //launching the browser
        await browser.url("http://localhost:8888/")
        await browser.pause(3000)

        //maximize the browser
        await browser.maximizeWindow()

        //getting the title of the page
        console.log(await browser.getTitle());

        //assertion: check whether the title fetched right 
        await expect (browser).toHaveTitleContaining("vtiger CRM 5")

    })
    it("fetch errormsg",async ()=>{

        //username = admin
        const username = await $('//div//input[@name="user_name"]')
        username.setValue("admin")
        await browser.pause(3000)

        //password = skd
        const password = await $('//div//input[@name="user_password"]')
        password.setValue("skd")
        await browser.pause(3000)

        //click on login button
        const button = await $('//div//input[@id="submitButton"]')
        button.click()

        const errormsg = await $("//div[@class='errorMessage']")
        
        await browser.waitUntil(async () => (await $(".errorMessage").getAttribute("class")) === 'errorMessage',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
         );

        
        
      // console.log(errormsg.getText()); 
       // await browser.pause(3000)
       //const errormsg = await $(".errorMessage");

        //assertion: to check the error msg
        await expect(errormsg).toHaveTextContaining("You must specify a valid username and password")

    })
})