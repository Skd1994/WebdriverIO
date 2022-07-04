class createOrganizationPage{
    
    
    get createOrganizationImg(){
        return $(`//img[@alt='Create Organization...']`)

    }
    async createOrganization(){
        await this.createOrganizationImg.click()
    }
   
    get orgName(){
        return $(`//input[@name='accountname']`)

    }
    async organizationName(){
        var randomNum = Math.round(Math.random()*1000)
        await  this.orgName.setValue("Skd"+randomNum)
    }
    get save(){
        return $(`//input[@title='Save [Alt+S]']`)

    }
    async saveBtn(){
        await this.save.click()
    }
}
module.exports = new createOrganizationPage();