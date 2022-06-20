describe("ecomm application",async ()=>{
    it("launch the browser",async ()=>{
        await browser.url("https://www.instagram.com/")
        await console.log(browser.getTitle());
    })

})