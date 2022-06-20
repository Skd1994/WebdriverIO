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

        //username = admin
        const username = await $('//div//input[@name="user_name"]')
        username.setValue("admin")
        await browser.pause(3000)

        //password = root
        const password = await $('//div//input[@name="user_password"]')
        password.setValue("root")
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
          LastName.setValue("tyssjs"+randomNum)
          await browser.pause(3000)

          const saveBtn = await $("//input[@title='Save [Alt+S]']")
          saveBtn.click()
          await browser.pause(3000)

           //assertion
        var contactInformation = await  $('//span[@class="dvHeaderText"]').getText()
        await console.log(contactInformation);
        await assert.include(contactInformation,"Contact Information"," contact page not found")

          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          adminImg.moveTo()

          await browser.$("//td//a[text()='Sign Out']").click()


    })
})