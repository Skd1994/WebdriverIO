const { assert } = require("chai")

describe("create Document",async ()=>{
    it("launch vtiger",async()=>{
        //launching the browser
        await browser.url("http://localhost:8888/")
        await browser.pause(3000)

        //maximize the browser
        await browser.maximizeWindow()

    })
    it("login to vtiger",async()=>{
         //username = admin
         var username = await $('//div//input[@name="user_name"]')
         username.setValue("admin")
         await browser.pause(3000)
 
         //password = root
         var password = await $('//div//input[@name="user_password"]')
         password.setValue("root")
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
          saveBtn.click()
          await browser.pause(3000)

           //assertion
        var documentInformation = await  $('//span[@class="dvHeaderText"]').getText()
        await console.log(documentInformation);
        await assert.include(documentInformation,"Document Information"," document page not found")
          
          //click on administrator image
          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          adminImg.moveTo()

          //click on signout
          await browser.$("//td//a[text()='Sign Out']").click()

    })

})