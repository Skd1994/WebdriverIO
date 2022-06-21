const { assert } = require("chai")

describe("create Organization",async ()=>{
    it("launching the vtiger application",async()=>{
        //launching the browser
        await browser.url("http://localhost:8888/")
        await browser.pause(3000)

        //maximize the browser
        await browser.maximizeWindow()

    })
    it("create Org with OrgName",async ()=>{

        var randomNum = Math.round(Math.random()*1000)

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

          const organization = await $("//td[@class='tabUnSelected']//a[text()='Organizations']")
          organization.click()
          await browser.pause(3000)

          const createOrg = await $("//img[@alt='Create Organization...']")
          createOrg.click()
          await browser.pause(3000)

          const OrgName = await $("//input[@name='accountname']")
          OrgName.setValue("tyssjs"+randomNum)
          await browser.pause(3000)

          //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
        await saveBtn.click()
          await browser.pause(3000)

          
           //assertion
        var organizationInformation = await  $('//span[@class="dvHeaderText"]').getText()
        await console.log(organizationInformation);
        await assert.include(organizationInformation,"Organization Information"," organization page not found")
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
