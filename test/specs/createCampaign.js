const { assert } = require("chai")
const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const homePage = require("../pageobjects/vtigerPageObject/homePage")


describe("create Campaign",async ()=>{
    it("launch vtiger",async()=>{
        //launching the browser
       await LoginPage.open()
       await browser.url("http://localhost:8888/")
       await console.log(browser.getTitle());

       //maximize the browser
       await browser.maximizeWindow()
       await LoginPage.login('admin', 'root')
       await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    })
    it("login to vtiger",async()=>{
         
         var username = "admin"
         var password = "root"
         
         //username = admin
         var usernameInput = await $('//div//input[@name="user_name"]')
         await usernameInput.setValue(username)
         await browser.pause(3000)
 
         //password = root
         var passwordInput = await $('//div//input[@name="user_password"]')
         await passwordInput.setValue(password)
         await browser.pause(3000)
 
           //click on login button
           var button = await $('//div//input[@id="submitButton"]')
           button.click()

           //asertion
          var homepage = await (await $('//a[@class="hdrLink"]')).getText()
          await console.log(homepage);
          await assert.include(homepage,"ome","failed login")
    })
    it("create Campaign",async()=>{
        var randomNum = Math.round(Math.random()*1000)
        var campaignNameInput = "SKD"
        //click on more
        var more = await  browser.$("//a[text()='More']")
        await more.moveTo()

        //click on campaign
        var campaign = await $("//a[text()='Campaigns']")
        await campaign.click()
        await browser.pause(3000)

        //assertion
        var campaignPage = await $('//a[@class="hdrLink"]')
        await campaignPage.getText()
        await console.log(campaignPage);
        await assert.include(campaignPage,"aigns","campaign page not found")

        //click on create campaign
        var createCampaign = await $("//img[@alt='Create Campaign...']")
        await createCampaign.click()
        await browser.pause(3000)

        //assertion
        var createnewcampaign = await $('//span[@class="lvtHeaderText"]')
        await createnewcampaign.getText()
        await console.log(createnewcampaign);
        await assert.include(createnewcampaign," New Campaign","create new campaign page not found")

        //campaign name
        var campaignName = await $("//input[@name='campaignname']")
        await campaignName.setValue(campaignNameInput+randomNum)
        await browser.pause(3000)

        
    }) 

    it("save and logout",async()=>{

        //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
        await saveBtn.click()
          await browser.pause(3000)

          //assertion
        var campaignInformation = await $('//span[@class="dvHeaderText"]')
        await campaignInformation.getText()
        await console.log(campaignInformation);
        await assert.include(campaignInformation," Campaign Information"," campaign page not found")
          
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
        // await assert.include(loginPage,"Powered by vtiger CRM","login page not found")
          await expect(browser).toHaveUrlContaining("Login&module")

    })

})