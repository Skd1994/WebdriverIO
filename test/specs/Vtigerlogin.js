const { assert } = require("chai")
const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const fs = require('fs')
const credentials = JSON.parse(fs.readFileSync("test/testdata/login.json"))

describe("create Contacts",async ()=>{
    it("launching the vtiger application",async()=>{
        //launching the browser
    //    await LoginPage.open()
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle());

        //maximize the browser
         await browser.maximizeWindow()
        // await LoginPage.login('admin', 'root')
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
    credentials.forEach(({userName,password}) => {
      it('login page credentials ',async()=>{
        await LoginPage.login(userName,password)
        console.log('=================');
        const error_msg = await $(".errorMessage")
        await expect(error_msg).toHaveTextContaining("You must specify a ")

      })
      
    })
})