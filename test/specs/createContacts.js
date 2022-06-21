const { assert } = require("chai")

describe("create Contacts",async ()=>{
    it("launching the vtiger application",async()=>{
        //launching the browser
        await browser.url("http://localhost:8888/")
        await browser.pause(3000)

        //maximize the browser
        await browser.maximizeWindow()

    })
    it("create contact with lastName",async ()=>{

        var randomNum = Math.round(Math.random())

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
          const button = await $('//div//input[@id="submitButton"]')
          button.click()

          const contacts = await $("//a[text()='Contacts']")
          contacts.click()
          await browser.pause(3000)

          const createContact = await $("//img[@alt='Create Contact...']")
          createContact.click()
          await browser.pause(3000)

          const LastName = await $("//input[@name='lastname']")
          await LastName.setValue("tyssjs"+randomNum)
          await browser.pause(3000)

         //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
        await saveBtn.click()
          await browser.pause(3000)

           //assertion
        var contactInformation = await  $('//span[@class="dvHeaderText"]').getText()
        await console.log(contactInformation);
        await assert.include(contactInformation,"Contact Information"," contact page not found")

          //click on administrator image
          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          await adminImg.moveTo()

          //click on signout
          var signOutBtn = await $("//td//a[text()='Sign Out']")
          await signOutBtn.click()

          //assertion
        // var loginPage = await $('//div[@class="poweredBy"]')
        // await loginPage.getText()
        // await console.log(loginPage);
        // await assert.include(loginPage,"Powered by vtiger","login page not found")
        await expect(browser).toHaveUrlContaining("Login&module")


    })
})