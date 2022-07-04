describe("handle radio button",async() => {

    it("launch",async() => {

        await browser.url("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/")
        
        await browser.maximizeWindow()
        await console.log(browser.getTitle());

        
    })
    it("click radio button", async() => {
        
        var radioBtn = await $("//div//label[@for='radio-choice-0b']")
        // await radioBtn.waitForDisplayed({ timeout: 3000 })
        

        //await expect(browser).toHaveUrlContaining("checkboxradiob")
        await radioBtn.scrollIntoView()
        await radioBtn.click()
        await console.log("radio button clicked");
        await browser.isElementSelected("//div//label[@for='radio-choice-0b']")

       await browser.debug()

    })
})