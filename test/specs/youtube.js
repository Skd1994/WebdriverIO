describe("youtube",async ()=>{
    it("launch youtube",async ()=>{
       await browser.url("https://www.youtube.com/")
        await browser.maximizeWindow()

       await (await browser.$("//input[@id='search']")).setValue("dice media")
        //    await browser.keys(["Enter"])
        await browser.$("//button[@id='search-icon-legacy']").click()
        // const video = await $("//a[@id='video-title']/yt-formatted-string[contains(@aria-label,'Story 3')]")

        // await video.scrollIntoView()

        await browser.$("(//div[@id='title-wrapper'])[1]").click()
        // await (await browser.$("//a[@id='video-title']/yt-formatted-string[contains(@aria-label,'Story 3')]")).click()

    })
})