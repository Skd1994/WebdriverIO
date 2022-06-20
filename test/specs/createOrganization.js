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

          const organization = await $("//td[@class='tabUnSelected']//a[text()='Organizations']")
          organization.click()
          await browser.pause(3000)

          const createOrg = await $("//img[@alt='Create Organization...']")
          createOrg.click()
          await browser.pause(3000)

          const OrgName = await $("//input[@name='accountname']")
          OrgName.setValue("tyssjs"+randomNum)
          await browser.pause(3000)

          const saveBtn = await $("//input[@title='Save [Alt+S]']")
          saveBtn.click()
          await browser.pause(3000)

          
           //assertion
        var organizationInformation = await  $('//span[@class="dvHeaderText"]').getText()
        await console.log(organizationInformation);
        await assert.include(organizationInformation,"Organization Information"," organization page not found")

          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          adminImg.moveTo()

          await browser.$("//td//a[text()='Sign Out']").click()


    })
})
