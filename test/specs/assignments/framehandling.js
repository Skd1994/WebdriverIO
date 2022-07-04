describe("frame handling",async() => {
    it("launch the browser", async() => {
        //launching the browser
        await browser.url("https://chercher.tech/practice/frames")
        await browser.pause(3000)
        await browser.maximizeWindow()
       // await console.log(browser.getTitle());
       await expect(browser).toHaveTitleContaining('Frame')

    })
    it("Topic", async() => {
         //switch to frame1
         var frame1 = await $("//iframe[@id='frame1']")
         await browser.switchToFrame(frame1)
         await browser.pause(3000)

         var topictxt = await $("//input")
         await topictxt.setValue("JavaScript")
         console.log(await topictxt.getText());
         await browser.pause(3000)

         //switch to frame3
         var frame3 = await $("//iframe[@id='frame3']")
         await browser.switchToFrame(frame3)
         await browser.pause(3000)

         //click checkbox
         var checkbox =await $("//input[@id='a']")
         await checkbox.click()
         await browser.pause(3000)
         await browser.switchToFrame(null)

         //switch to frame2
         var frame2 = await  $("//iframe[@id='frame2']")
         await browser.switchToFrame(frame2)
         await browser.pause(3000)

         //select dropdown
         var animalDrop = await $("//select[@id='animals']")
         await animalDrop.selectByVisibleText("Avatar")
         await browser.pause(3000)

        


    })
})