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
         //username = admin
         var username = await $('//div//input[@name="user_name"]')
         username.setValue("admin")
         await browser.pause(3000)
 
         //password = root
         var password = await $('//div//input[@name="user_password"]')
         password.setValue("root")
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
          saveBtn.click()
          await browser.pause(3000)

          
           //assertion
        var productInformation = await  $('//span[@class="lvtHeaderText"]').getText()
        await console.log(productInformation);
        await assert.include(productInformation,"Product Information"," product page not found")
          
          //click on administrator image
          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          adminImg.moveTo()

          //click on signout
          await browser.$("//td//a[text()='Sign Out']").click()

    })

})