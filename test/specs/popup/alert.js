describe("alertHandle",async() => {
    it("acceptAlert",async() => {
        await browser.url("C:/Users/Admin/Desktop/WebDriverIO/test/specs/popup/present.html")
        var alertTxt = await browser.getAlertText()
        console.log("==============alertText==========="+alertTxt);

        await browser.acceptAlert()
        var promptTxt = await browser.getAlertText()
        console.log("==============promptText==========="+promptTxt);
        await browser.sendAlertText("SKD")
        await browser.acceptAlert()


    })

})