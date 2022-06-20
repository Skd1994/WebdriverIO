const { assert } = require("chai")

describe("create Campaign",async ()=>{
    it("launch vtiger",async()=>{
        //launching the browser
        await browser.url("http://localhost:8888/")
        await browser.pause(3000)

        //maximize the browser
        await browser.maximizeWindow()

    })
    it("login to vtiger",async()=>{
         
         var username = "admin"
         var password = "root"
         
         //username = admin
         var username1 = await $('//div//input[@name="user_name"]')
         username1.setValue(username)
         await browser.pause(3000)
 
         //password = root
         var password1 = await $('//div//input[@name="user_password"]')
         password1.setValue(password)
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
        //click on more
        var more = await  browser.$("//a[text()='More']")
        await more.moveTo()

        //click on campaign
        await browser.$("//a[text()='Campaigns']").click()
        await browser.pause(3000)

        //assertion
        var campaignPage = await (await $('//a[@class="hdrLink"]')).getText()
        await console.log(campaignPage);
        await assert.include(campaignPage,"aigns","campaign page not found")

        //click on create campaign
        await browser.$("//img[@alt='Create Campaign...']").click()
        await browser.pause(3000)

        //assertion
        var createnewcampaign = await (await $('//span[@class="lvtHeaderText"]')).getText()
        await console.log(createnewcampaign);
        await assert.include(createnewcampaign," New Campaign","create new campaign page not found")

        //campaign name
        await browser.$("//input[@name='campaignname']").setValue("SKD"+randomNum)
        await browser.pause(3000)

        
    }) 

    it("save and logout",async()=>{

        //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
          saveBtn.click()
          await browser.pause(3000)

          //assertion
        var campaignInformation = await (await $('//span[@class="dvHeaderText"]')).getText()
        await console.log(campaignInformation);
        await assert.include(campaignInformation," Campaign Information"," campaign page not found")
          
          //click on administrator image
          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          adminImg.moveTo()

          //click on signout
          await browser.$("//td//a[text()='Sign Out']").click()

          //assertion
        var loginPage = await (await $('//div[@class="poweredBy"]')).getText()
        await console.log(loginPage);
        await assert.include(loginPage,"Powered by vtiger CRM","login page not found")

    })

})