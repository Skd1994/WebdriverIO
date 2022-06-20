describe("fakebook login",async()=>{

   
    it("launch fakebook",async()=>{
         //launching the browser
         await browser.url("https://www.facebook.com/")
         await browser.pause(3000)

         //maximize the browser
         await browser.maximizeWindow()

         //getting the title of the page
         console.log(await browser.getTitle());

         //assertion to check whether title fetched right
         await expect(browser).toHaveTitleContaining("log in or sign up")

    })
    it("login to fakebook",async ()=>{

        //password = skd
        const password = await $("//input[@type='password']")
        password.setValue("skd")
        await browser.pause(3000)

        //click on login button
        const loginbutton = await $("//button[@name='login']")
        await loginbutton.click()

        const errormsg = await $("//div[@class='_9ay7']")
        
        await browser.waitUntil(async () => (await $(".errorMessage").getAttribute("class")) === 'errorMessage',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
         );

         await expect(errormsg).toHaveTextContaining("The email address or mobile number you entered isn't connected to an account. ")



    })

})