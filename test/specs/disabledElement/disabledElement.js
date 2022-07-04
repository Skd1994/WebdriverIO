describe("disable_suite",async() => {
it("disable",async() => {
    await browser.url("C:/Users/Admin/Desktop/WebDriverIO/test/specs/disabledElement/disabledElement.html")
    var fnameTxtfield = await $("//input[@id='fname']")
    await fnameTxtfield.setValue("S")
    var fnameValue = await fnameTxtfield.getValue()
    console.log("===========fnameValue=========="+fnameValue);
    await browser.pause(2000)

    var lnameTxtfield = await $("//input[@id='lname']")
    await browser.execute((lnameValue) => {
        document.getElementById("lname").setAttribute("value",lnameValue)

    },"KD")
    var lnameValue = await lnameTxtfield.getValue()
    console.log("===========lnameValue=========="+lnameValue);
    await browser.pause(2000)




})
})