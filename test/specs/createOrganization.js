const { assert } = require("chai")
const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const homePage = require("../pageobjects/vtigerPageObject/homePage")
const createOrganizationPage = require("../pageobjects/vtigerPageObject/createOrganizationPage")
const organizationInformationPage = require("../pageobjects/vtigerPageObject/organizationInformationPage")


describe("create Organization",async ()=>{
    it("launching the vtiger application Smoke",async()=>{
        //launching the browser
        await LoginPage.open()
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle());

        //maximize the browser
        await browser.maximizeWindow()
        await LoginPage.login('admin', 'root')
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
    it("create Org with OrgName",async ()=>{

        var randomNum = Math.round(Math.random()*1000)

        // var username = "admin"
        //  var password = "root"
         
         //username = admin
        //  var usernameInput = await $('//div//input[@name="user_name"]')
        //  usernameInput.setValue(username)
        //  await browser.pause(3000)
 
         //password = root
        //  var passwordInput = await $('//div//input[@name="user_password"]')
        //  passwordInput.setValue(password)
        //  await browser.pause(3000)

          //click on login button
          // const button = await $('//div//input[@id="submitButton"]')
          // button.click()
         
         await expect(browser).toHaveUrlContaining('index&module=Home')
          await homePage.organization()
          await expect (browser).toHaveUrlContaining("Accounts&action")


          // const organization = await $("//td[@class='tabUnSelected']//a[text()='Organizations']")
          // organization.click()
          // await browser.pause(3000)
          

          // const createOrg = await $("//img[@alt='Create Organization...']")
          // createOrg.click()
          await createOrganizationPage.createOrganization()
          await expect(browser).toHaveUrlContaining("EditView&return")

          // const OrgName = await $("//input[@name='accountname']")
          // OrgName.setValue("tyssjs"+randomNum)
          // await browser.pause(3000)
          await createOrganizationPage.organizationName()

          //click on save button
        // const saveBtn = await $("//input[@title='Save [Alt+S]']")
        // await saveBtn.click()
        //   await browser.pause(3000)
        await createOrganizationPage.saveBtn()
        await expect(browser).toHaveUrlContaining("Accounts")

          
           //assertion
        // var organizationInformation = await  $('//span[@class="dvHeaderText"]').getText()
        // await console.log(organizationInformation);
        // await assert.include(organizationInformation,"Organization Information"," organization page not found")
        // await browser.pause(3000)
        await organizationInformationPage.organizationCreatedTxt()
        await expect(browser).toHaveUrlContaining("Accounts&parenttab")

          //click on administrator image
          // const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          // await adminImg.moveTo()
          // await browser.pause(3000)

          //click on signout
          // var signOutBtn = await $("//td//a[text()='Sign Out']")
          // await signOutBtn.click()
          // await browser.pause(3000)
          await homePage.adminImg()
          await homePage.signOutBtn()
          await expect(browser).toHaveUrlContaining("Login&module")

          //assertion
        // var loginPage = await $('//div[@class="poweredBy"]')
        // await loginPage.getText()
        // await console.log(loginPage);
        // await assert.include(loginPage,"Powered by vtiger CRM","login page not found")
        // await expect(browser).toHaveUrlContaining("Login&module")


    })
})
