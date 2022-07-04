const { assert } = require("chai")
const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const homePage = require("../pageobjects/vtigerPageObject/homePage")


describe("create Contacts with Organization",async ()=>{
    it("launching the vtiger application",async()=>{
       //launching the browser
       await LoginPage.open()
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle());

        //maximize the browser
        await browser.maximizeWindow()
        await LoginPage.login('admin', 'root')
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
    it("create contact with Org",async ()=>{

        var randomNum = Math.round(Math.random()*1000)

        // var username = "admin"
        //  var password = "root"
         
        //  //username = admin
        //  var usernameInput = await $('//div//input[@name="user_name"]')
        //  usernameInput.setValue(username)
        //  await browser.pause(3000)
 
        //  //password = root
        //  var passwordInput = await $('//div//input[@name="user_password"]')
        //  passwordInput.setValue(password)
        //  await browser.pause(3000)

        //   //click on login button
        //   var button = await $('//div//input[@id="submitButton"]')
        //   button.click()
          
          //create Organization
          await expect(browser).toHaveUrlContaining('index&module=Home')
          await homePage.organization()
          await expect(browser).toHaveUrlContaining("Accounts&action")

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
          // await expect(browser).toHaveUrlContaining('index&module=Home')
          await homePage.contacts()
          // await expect(browser).toHaveUrlContaining('Contacts&action')
          // var contacts = await browser.$("//a[text()='Contacts']")
          //  await contacts.click()
        

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

          //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
        await saveBtn.click()
          await browser.pause(3000)

          //assertion
       var contactwithOrgInformation = await  $('//span[@class="dvHeaderText"]').getText()
       await console.log(contactwithOrgInformation);
       await assert.include(contactwithOrgInformation,"Contact Information"," contactwithOrgInformation page not found")

         //click on administrator image
         const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
         await adminImg.moveTo()

         //click on signout
         var signOutBtn = await $("//td//a[text()='Sign Out']")
         await signOutBtn.click()

         //assertion
    //    var loginPage = await $('//div[@class="poweredBy"]')
    //    await loginPage.getText()
    //    await console.log(loginPage);
    //    await assert.include(loginPage,"Powered by vtiger CRM","login page not found")
    await expect(browser).toHaveUrlContaining("Login&module")


    })
})