
describe("frame handling",async() => {
    it("launch the browser", async() => {
        //launching the browser
        await browser.url("https://ui.vision/demo/webtest/frames/")
        await browser.pause(3000)
        await browser.maximizeWindow()
      
       await expect(browser).toHaveUrlContaining('demo')

       //switch to frame1
       var frame1 = await $("//frame[@src='frame_1.html']")
       await browser.switchToFrame(frame1)
       await browser.pause(3000)

       var frame1txt = await $("//input[@name='mytext1']")
       await frame1txt.setValue("JavaScript")
       console.log(await frame1txt.getText());
       await browser.pause(3000)
       await browser.switchToFrame(null)

       //switch to frame2
       var frame2 = await $("//frame[@src='frame_2.html']")
       await browser.switchToFrame(frame2)
       await browser.pause(3000)

       var frame2txt = await $("//input[@name='mytext2']")
       await frame2txt.setValue("Selenium")
       console.log(await frame2txt.getText());
       await browser.pause(3000)
       await browser.switchToFrame(null)

       //switch to frame4
       var frame4 = await $("//frame[@src='frame_4.html']")
       await browser.switchToFrame(frame4)
       await browser.pause(3000)
     
       var frame4txt = await $("//input[@name='mytext4']")
       await frame4txt.setValue("Python")
       console.log(await frame4txt.getText());
       await browser.pause(3000)
       await browser.switchToFrame(null)

       //switch to frame3
       var frame3 = await $("//frame[@src='frame_3.html']")
       await browser.switchToFrame(frame3)
       await browser.pause(3000)

       var frame3txt = await $("//input[@name='mytext3']")
       await frame3txt.setValue("Anaconda")
       console.log(await frame3txt.getText());
       await browser.pause(3000)

       var frameinsideframe3 = await $("//iframe")
       await browser.switchToFrame(frameinsideframe3)

       var radioBtn = await $("//span[text()='I am a human']")
       await radioBtn.click()
       await browser.pause(3000)

       var scrollPoint = await $("//span[contains(text(),'How do you plan')]")
        await scrollPoint.scrollIntoView()

        var checkBox = await $("//span[text()='Form Autofilling']")
        await checkBox.click()
        await browser.pause(2000)


        var scrollPoint2 = await $("//span[contains(text(),'IDE has a LOOP button?')]")
        await scrollPoint2.scrollIntoView()

        var choose = await $("//span[text()='Choose']")
        await choose.click()
        await browser.pause(2000)

        // var option2 = await $("//div[contains(@class,'ziS7vd')]/following-sibling::span")
        var option2 = await $("//div[contains(@class,'QXL7Te')]/div[@data-value='Well, now I know :-)']")
        await option2.click()
        await browser.pause(2000)

        var nextBtn = await $("//span[text()='Next']")
        await nextBtn.click()
        await browser.pause(4000)

        
        //  async () => {
        //     var waitElement = await $("//div[text()='Some text boxes']")
        //      await waitElement.waitForDisplayed({ timeout: 4000 });
        //  }

        var shortText = await $("//input[contains(@class,'zHQkBf')]")
        await shortText.setValue("welcome to webdriverIO")
        await browser.pause(2000)

        var scrollPoint3 = await $("//span[text()='Enter a long answer']")
        await scrollPoint3.scrollIntoView()

        var longText = await $("//textarea[contains(@class,'tL9Q4c')]")
        await longText.setValue("hello everyone")
        await browser.pause(2000)

        var submitBtn = await $("//span[text()='Submit']")
        await submitBtn.click()

        async () => {
            var waitElement2 = await $("//div[@class='vHW8K']")
            await waitElement2.waitForDisplayed({ timeout: 3000 });
        }

        var msgTxt = await $("//div[contains(text(),'testing the UI')]")
        var savedMsg = await msgTxt.getText()
        console.log("========savedMsg============>>>>>>>>>" +savedMsg);

        await browser.switchToFrame(null)
        // await browser.switchToParentFrame()
      
        //frame 4
        var frame4 = await $("//frame[@src='frame_4.html']")
        await browser.switchToFrame(frame4)

        var frame4Text = await $("//input[@name='mytext4']") 
        await frame4Text.setValue("this is frame 4")
        await browser.pause(2000)


    })
   
})