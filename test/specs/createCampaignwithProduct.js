const { assert } = require("chai")

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
        var saveBtn = await $("//input[@title='Save [Alt+S]']")
          saveBtn.click()
          await browser.pause(3000)

          //assertion
       var campaignwithProductInformation = await  $('//span[@class="dvHeaderText"]').getText()
       await console.log(campaignwithProductInformation);
       await assert.include(campaignwithProductInformation,"Campaign Information"," campaignwithProductInformation page not found")
          //click on administrator image
          const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          adminImg.moveTo()

          //click on signout
          await browser.$("//td//a[text()='Sign Out']").click()

    })

})