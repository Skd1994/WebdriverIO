class contactInformationPage{
    get contactCreated(){
        return $(`//span[@class="dvHeaderText"]`)
        }
        async contactCreatedTxt(){
            await this.contactCreated.getText()
        }
}
module.exports = new contactInformationPage()