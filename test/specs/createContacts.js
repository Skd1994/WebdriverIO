const { assert } = require("chai")
const LoginPage = require("../pageobjects/vtigerPageObject/LoginPage")
const homePage = require("../pageobjects/vtigerPageObject/homePage")
const createContactPage = require("../pageobjects/vtigerPageObject/createContactPage")
const contactInformationPage = require("../pageobjects/vtigerPageObject/contactInformationPage")


describe("create Contacts",async ()=>{
    it("launching the vtiger application SKD ",async()=>{
        //launching the browser
       await LoginPage.open()
        await browser.url("http://localhost:8888/")
        await console.log(browser.getTitle());

        //maximize the browser
        await browser.maximizeWindow()
        await LoginPage.login('admin', 'root')
        await expect(browser).toHaveTitleContaining('vtiger CRM 5')

    
      
     });
    it("create contact with lastName SKD ",async ()=>{

        //var randomNum = Math.round(Math.random())

        //var username = "admin"
         //var password = "root"
         
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
          await homePage.contacts()
          await expect(browser).toHaveUrlContaining('Contacts&action')
          //var contacts = await browser.$("//a[text()='Contacts']")
           //await contacts.click()
          

         //await createContactPage.createContactImg()
          //  const createContact = await browser.$("//img[@alt='Create Contact...']")
          // await createContact.click()
          await createContactPage.createContact()
          await expect(browser).toHaveUrlContaining('EditView&return')
         

          // const LastName = await $("//input[@name='lastname']")
          // await LastName.setValue("tyssjs"+randomNum)
          // await browser.pause(3000)
          await createContactPage.LastName()

         //click on save button
        // const saveBtn = await $("//input[@title='Save [Alt+S]']")
        // await saveBtn.click()
        //   await browser.pause(3000)
        await createContactPage.saveBtn()
        await expect(browser).toHaveUrlContaining("Contacts&parenttab")

           //assertion
        // var contactInformation = await  $('//span[@class="dvHeaderText"]').getText()
        // await console.log(contactInformation);
        // await assert.include(contactInformation,"Contact Information"," contact page not found")
        // await assert.include(contactInformation,""," contact page not found")
        await contactInformationPage.contactCreatedTxt()
        await expect(browser).toHaveUrlContaining("Contacts&parenttab")


          //click on administrator image
          // const adminImg = await $("//img[@src='themes/softed/images/user.PNG']")
          // await adminImg.moveTo()
          await homePage.adminImg()
          await homePage.signOutBtn()
          await expect(browser).toHaveUrlContaining("Login&module")


          //click on signout
          // var signOutBtn = await $("//td//a[text()='Sign Out']")
          // await signOutBtn.click()

          //to fail the test case
          // assert.fail()

          //assertion
        // var loginPage = await $('//div[@class="poweredBy"]')
        // await loginPage.getText()
        // await console.log(loginPage);
        // await assert.include(loginPage,"Powered by vtiger","login page not found")
        // await expect(browser).toHaveUrlContaining("http://980867")
      
        // await expect(browser).toHaveUrlContaining('webdriver')

    })
})