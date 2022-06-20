describe("vtiger application",async ()=>{
    it("launch browser",async ()=>{
        await browser.url("http://localhost:8888/")
        await browser.maximizeWindow()
        await browser.getWindowSize()
        console.log(browser.getWindowSize());
        await browser.$('//div//input[@name="user_name"]').setValue("admin")
        await browser.$('//div//input[@name="user_password"]').setValue("root")
        await browser.$('//div//input[@id="submitButton"]').click()
        await browser.$('//td//a[text()="Contacts"]').click()
        await browser.$('//td//a[text()="More"]').click ()
        await browser.$('//td//a[text()="Campaigns"]').click() 



    })
})