const { assert } = require("chai")

describe("create Contacts with Organization",async ()=>{
    it("launching the vtiger application",async()=>{
        //launching the browser
        await browser.url("http://localhost:8888/")
        await browser.pause(3000)

        //maximize the browser
        await browser.maximizeWindow()

    })
    it("create contact with Org",async ()=>{

        var randomNum = Math.round(Math.random()*1000)

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
          
          //create Organization
          var organization = await $("//td[@class='tabUnSelected']//a[text()='Organizations']")
          organization.click()
          await browser.pause(3000)

          var createOrg = await $("//img[@alt='Create Organization...']")
          createOrg.click()
          await browser.pause(3000)

          await (await $("//input[@name='accountname']")).setValue("webdriverIO"+randomNum)

          var saveBtn1 = await $("//input[@title='Save [Alt+S]']")
          saveBtn1.click()
          await browser.pause(3000)

          var OrgNamesaved = await $("//td[@id='mouseArea_Organization Name']").getText()
          await browser.pause(3000)
         

          

          //create Contact
          var contacts = await $("//a[text()='Contacts']")
          contacts.click()
          await browser.pause(3000)
        

          var createContact = await $("//img[@alt='Create Contact...']")
          createContact.click()
          await browser.pause(3000)

          var LastName = await $("//input[@name='lastname']")
          LastName.setValue("WEBDRIVERIO"+randomNum)
          await browser.pause(3000)

          //click on Organization name
          await browser.$("//img[@src='themes/softed/images/select.gif']").click()
          await browser.pause(2000)
          await browser.switchWindow('Accounts&action')
          await browser.pause(2000)
          await browser.$("//input[@id='search_txt']").setValue(OrgNamesaved)
          await browser.pause(2000)
          await browser.$("//input[@name='search']").click()
  
          await browser.pause(2000)
        //   await (await browser.$("//img[@src='themes/softed/images/select.gif']")).click()
        //   await browser.pause(3000)

        // //   await browser.switchWindow("Accounts&action")
        //   await browser.switchWindow('Accounts&action')
        //   (await browser.$("//input[@name='search_text']")).setValue(OrgNamesaved)
        //   await browser.pause(3000)

        //   await (await browser.$("//input[@type='button']")).click()
        //   await browser.pause(3000)

        //   await browser.$("//a[text()='"+OrgNamesaved+"']").click()
        await browser.$("//a[@id='1']").click()
          await browser.pause(2000)


          await browser.switchWindow('Contacts&action')

          var saveBtn = await $("//input[@title='Save [Alt+S]']")
          saveBtn.click()
          await browser.pause(3000)

          //assertion
       var contactwithOrgInformation = await  $('//span[@class="dvHeaderText"]').getText()
       await console.log(contactwithOrgInformation);
       await assert.include(contactwithOrgInformation,"Contact Information"," contactwithOrgInformation page not found")

          var adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          adminImg.moveTo()

          await browser.$("//td//a[text()='Sign Out']").click()


    })
})