class organizationInformationPage {
    
    get organizationCreated(){
        return $('//span[@class="dvHeaderText"]')
        }
        async organizationCreatedTxt(){
            await this.organizationCreated.getText()
        }
}
module.exports = new organizationInformationPage()