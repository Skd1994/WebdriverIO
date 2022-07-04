const { assert } = require("chai")
const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const homePage = require("../pageobjects/vtigerPageObject/homePage")
const createOrganizationPage = require("../pageobjects/vtigerPageObject/createOrganizationPage")
const organizationInformationPage = require("../pageobjects/vtigerPageObject/organizationInformationPage")

const fs = require('fs')
const credentials = JSON.parse(fs.readFileSync("test/testdata/organizationName.json"))


describe("create Organization",async ()=>{
    it("launching the vtiger application SKD",async()=>{
        //launching the browser
        await LoginPage.open()
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle());

        //maximize the browser
        await browser.maximizeWindow()
        await LoginPage.login('admin', 'root')
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
    credentials.forEach(({orgName})=>{
    it("create Org with OrgName",async ()=>{

       

         
         await expect(browser).toHaveUrlContaining('index&module=Home')
          await homePage.organization()
          await expect (browser).toHaveUrlContaining("Accounts&action")


          
          await createOrganizationPage.createOrganization()
          await expect(browser).toHaveUrlContaining("EditView&return")

         
          await createOrganizationPage.organizationName(orgName)

          
        await createOrganizationPage.saveBtn()
        await expect(browser).toHaveUrlContaining("Accounts")

          
           
        await organizationInformationPage.organizationCreatedTxt()
        await expect(browser).toHaveUrlContaining("Accounts&parenttab")

          
          
          await homePage.adminImg()
          await homePage.signOutBtn()
          await expect(browser).toHaveUrlContaining("index&module=Home")

          


    })
})
})