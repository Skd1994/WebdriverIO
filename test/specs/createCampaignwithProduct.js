const { assert } = require("chai")
const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const homePage = require("../pageobjects/vtigerPageObject/homePage")


describe("create Campaign with Product",async ()=>{
    var randomNum = Math.round(Math.random()*1000)

    

    it('launch vtiger',async()=>{
        //launching the browser
        await browser.url("http://localhost:8888/")
        await browser.pause(3000)

        //maximize the browser
        await browser.maximizeWindow()

    })
    it('login to vtiger',async()=>{
         
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
           var button = await $('//div//input[@id="submitButton"]')
           button.click()
   
})
it('create Product',async()=>{
    
    //click on products
    await browser.$("//td[@align='center']//a[text()='Products']").click()
    await browser.pause(3000)

    //click on create products
    await browser.$("//img[@alt='Create Product...']").click()
    await browser.pause(3000)

    //product name
    await browser.$("//input[@name='productname']").setValue("GOOGLE"+randomNum)
    await browser.pause(3000)

    var saveBtn = await $("//input[@title='Save [Alt+S]']")
    saveBtn.click()
    await browser.pause(3000)

    var productSaved = await  $("//span[@id='dtlview_Product Name']").getText()
    await browser.pause(2000)


        //click on more
        var more = await  browser.$("//a[text()='More']")
        await more.moveTo()

        //click on campaign
        await browser.$("//a[text()='Campaigns']").click()
        await browser.pause(3000)

        //click on create campaign
        await browser.$("//img[@alt='Create Campaign...']").click()
        await browser.pause(3000)

        //campaign name
        await browser.$("//input[@name='campaignname']").setValue("SKD"+randomNum)
        await browser.pause(3000)

        //click on select Product
        await (await browser.$("//img[@src='themes/softed/images/select.gif']")).click()

        
        await browser.pause(2000)
        await browser.switchWindow('Products&action')
        await browser.pause(2000)

        await browser.$("//input[@name='search_text']").setValue(productSaved)
        await browser.pause(2000)

        await  browser.$("//input[@name='search']").click()
        await browser.pause(2000)

        await (await browser.$("//a[@id='1']")).click()
        await browser.pause(2000)
        await browser.switchWindow('Campaigns&action')
        await browser.pause(2000)



    }) 

    it('save and logout',async()=>{

        //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
        await saveBtn.click()
          await browser.pause(3000)

          //assertion
       var campaignwithProductInformation = await  $('//span[@class="dvHeaderText"]').getText()
       await console.log(campaignwithProductInformation);
       await assert.include(campaignwithProductInformation,"Campaign Information"," campaignwithProductInformation page not found")
         
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