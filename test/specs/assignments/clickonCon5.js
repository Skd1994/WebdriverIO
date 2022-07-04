describe("click on con5",async ()=>{
    it("launch vtiger",async()=>{
        //launching the browser
        await browser.url("http://localhost:8888/")
        await browser.pause(3000)

        //maximize the browser
        await browser.maximizeWindow()

        //assertion
        //await expect(browser).toHaveUrlContaining("action")

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
    it("click con5 checkbox",async() => {
        const contacts = await $("//a[text()='Contacts']")
          contacts.click()
          
          //assertion
        await expect(browser).toHaveUrlContaining("Contacts&action")
          var checkbox = await $("//input[@type= 'checkbox' and @id='10']")
          
          await checkbox.click()
          await console.log(" checkbox selected");
          await browser.isElementSelected("//input[@type= 'checkbox' and @id='10']")
          // await browser.pause(3000)
          //to fail the script intentionally
          // await expect(browser).toHaveUrlContaining("skd")

    })
})