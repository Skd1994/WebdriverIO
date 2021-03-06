const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const homePage = require("../pageobjects/vtigerPageObject/homePage")

describe("OrgwithIndustry",async() => {
    var randomNum = Math.round(Math.random()*1000)
    var orgName = "AUGNITO"

    it('launch vtiger',async()=>{
        //launching the browser
       await LoginPage.open()
       await browser.url("http://localhost:8888/")
       await console.log(browser.getTitle());

       //maximize the browser
       await browser.maximizeWindow()
       await LoginPage.login('admin', 'root')
       await expect(browser).toHaveTitleContaining('vtiger CRM 5')
    })

    // it("login to vtiger",async()=>{
    //     var username = "admin"
    //     var password = "root"
        
    //     //username = admin
    //     var usernameInput = await $("//div//input[@name='user_name']")
    //     usernameInput.setValue(username)
    //     await browser.pause(3000)
       
    //     //password = root
    //     var passwordInput = await $("//div//input[@name='user_password']")
    //     passwordInput.setValue(password)
    //     await browser.pause(3000)
        
    //        //click on login button
    //        var button = await $('//div//input[@id="submitButton"]')
    //        button.click()
    // })
    it("create Organization", async() => {
        //assertion
        await expect(browser).toHaveUrlContaining('index&module=Home')
          await homePage.organization()
          

        //assertion
        await expect(browser).toHaveUrlContaining("Accounts&action")

        var createOrganization = await browser.$("//img[@alt='Create Organization...']")
        await createOrganization.click()

        //assertion
        await expect(browser).toHaveUrlContaining("EditView&return")

        var orgNameTxt = await browser.$("//input[@name='accountname']")
        await orgNameTxt.setValue(orgName+randomNum)

    })

    it("IndustryDropdown", async() => {
        var industryDrop = await browser.$("//select[@name='industry']")
        await industryDrop.selectByVisibleText("Communications")
    })
    it("TypeDropdown", async() => {
        var typeDrop = await browser.$("//select[@name='accounttype']")
        await typeDrop.selectByVisibleText("Competitor")
    })
    it("save and logout",async()=>{

        //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
        await saveBtn.click()
        async() => {
            var savedOrganizationText = await $('//span[@class="dvHeaderText"]')
            await savedOrganizationText.waitForDisplayed({ timeout: 3000 })
        }
          

            //assertion
        var organizationInformation = await  $('//span[@class="dvHeaderText"]').getText()
        await console.log(organizationInformation);
        await assert.include(organizationInformation,"Organization Information"," organization page not found")
        
        //assertion
        await expect(browser).toHaveUrlContaining("Accounts&parenttab")

          //click on administrator image
          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          await adminImg.moveTo()
          
          //click on signout
          var signOutBtn = await $("//td//a[text()='Sign Out']")
          await signOutBtn.click()
         
        await expect(browser).toHaveUrlContaining("Login&module")

    })

})