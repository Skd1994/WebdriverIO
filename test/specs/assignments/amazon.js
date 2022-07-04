const { assert } = require("chai")

describe("scroll to help element",async() => {
    it("launch amazon browser", async() => {
        //launching the browser
        await browser.url("https://www.amazon.in/")
        
        //await browser.pause(3000)
        await browser.maximizeWindow()
        // await expect(browser).toHaveUrlContaining("Contacts&action")
        //await browser.pause(3000)

        var helpelement = await $("//a[text()='Help']")
        await helpelement.scrollIntoView()
        console.log("window scrolled to help element");
        // assert.fail()
        // await expect(browser).toHaveUrlContaining("Contacts&action")
        //await browser.pause(3000)
        

    })
})