describe("Google Test", () => {
    it("should go to google and click Sauce Labs", async () => {
        await browser.url("https://google.com");

        const searchBar1 = await browser.$("[name='q']")
        
        await searchBar1.setValue("Sauce Labs");
        await searchBar1.click();

    
    })

})