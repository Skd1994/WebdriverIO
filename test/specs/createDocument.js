const { assert } = require("chai")
const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const homePage = require("../pageobjects/vtigerPageObject/homePage")


describe("create Document",async ()=>{
    it("launch vtiger",async()=>{
        //launching the browser
       await LoginPage.open()
       await browser.url("http://localhost:8888/")
       await console.log(browser.getTitle());

       //maximize the browser
       await browser.maximizeWindow()
       await LoginPage.login('admin', 'root')
       await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
    it("login to vtiger",async()=>{
        var username = "admin"
        var password = "root"
        
        //username = admin
        var usernameInput = await $('//div//input[@name="user_name"]')
        usernameInput.setValue(username)
        await browser.pause(3000)

        //password = root
        var passwordInput = await $('//div//input[@name="user_password"]')
        passwordInput.setValue(password)
        await browser.pause(3000)
 
           //click on login button
           var button = await $('//div//input[@id="submitButton"]')
           button.click()
    })
    it("create Document",async()=>{
        var randomNum = Math.round(Math.random()*1000)

        //click on documents
        await browser.$("//a[text()='Documents']").click()
        await browser.pause(3000)

        //click on create document
        await browser.$("//img[@alt='Create Document...']").click()
        await browser.pause(3000)

        //title of the document
        await browser.$("//input[@name='notes_title']").setValue("SKD"+randomNum)
        await browser.pause(3000)


    })
    it("upload file",async()=>{

        //scroll down to choose file
        const file =  await $("//input[@name='filename']")
        await file.scrollIntoView();
        await browser.pause(3000)

       //filepath to be uploaded
        const filePath ="C:/Users/Admin/Desktop/Tyss study mtrl/6 TypesOF Framework.pdf"
        const remoteFilepath = await browser.uploadFile(filePath) 
        const finalfile = await browser.$("//input[@name='filename']").setValue(remoteFilepath)
        await browser.pause(3000)

    })
    it("write in frame",async()=>{

        //switch to frame
        browser.switchToFrame(0)
        await  browser.$("//body[@class='cke_show_borders']").setValue("The Griswold's in an unforgettable comedic journey of a lifetime. Life is stranger than fiction. Can you recount the tales of selling your first home? The excitement beforehand, the anticipation, as you anxiously await for that momentous day to arrive…SOLD")
        await browser.pause(3000)

        //select all text
        await browser.keys(['Control', 'a'])

        //copy all text
        await browser.keys(['Control', 'c'])
        await browser.pause(3000)

        browser.switchToFrame(null)
        
        //click on bold
        await  browser.$("//a[@class='cke_off cke_button_bold']").click()
        await browser.pause(3000)

        //click on italic
        await  browser.$("//a[@class='cke_off cke_button_italic']").click()
        await browser.pause(3000)

        //click on strike
        await  browser.$("//a[@class='cke_off cke_button_strike']").click()
        await browser.pause(3000)


    })
    it("save and logout",async()=>{

        //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
        await saveBtn.click()
          await browser.pause(3000)

           //assertion
        var documentInformation = await  $('//span[@class="dvHeaderText"]').getText()
        await console.log(documentInformation);
        await assert.include(documentInformation,"Document Information"," document page not found")
        await browser.pause(3000)
          
          //click on administrator image
          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          await adminImg.moveTo()
          await browser.pause(3000)

          //click on signout
          var signOutBtn = await $("//td//a[text()='Sign Out']")
          await signOutBtn.click()
          await browser.pause(3000)

          //assertion
        // var loginPage = await $('//div[@class="poweredBy"]')
        // await loginPage.getText()
        // await console.log(loginPage);
        // await assert.include(loginPage,"Powered by vtiger CRM","login page not found")
        await expect(browser).toHaveUrlContaining("Login&module")

    })

})