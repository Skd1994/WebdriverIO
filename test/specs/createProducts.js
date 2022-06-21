const { assert } = require("chai")

describe("create Products",async ()=>{
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
    it("create Product",async()=>{
        var randomNum = Math.round(Math.random()*1000)
        

        //click on products
        await browser.$("//td[@align='center']//a[text()='Products']").click()
        await browser.pause(3000)

        //click on create products
        await browser.$("//img[@alt='Create Product...']").click()
        await browser.pause(3000)

        //product name
        await browser.$("//input[@name='productname']").setValue("SKD"+randomNum)
        await browser.pause(3000)


    }) 

    it("save and logout",async()=>{

        //click on save button
        const saveBtn = await $("//input[@title='Save [Alt+S]']")
        await saveBtn.click()
          await browser.pause(3000)

          
           //assertion
        var productInformation = await  $('//span[@class="lvtHeaderText"]').getText()
        await console.log(productInformation);
        await assert.include(productInformation,"Product Information"," product page not found")
          
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