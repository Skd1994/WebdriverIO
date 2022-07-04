class createContactPage{
    get createContactImg(){
        return $(`//img[@alt='Create Contact...']`)

    }
    async createContact(){
        await this.createContactImg.click()
    }
    
    get contactLastName(){
        return $(`//input[@name='lastname']`)

    }
    async LastName(){
        var randomNum = Math.round(Math.random())
        await  this.contactLastName.setValue("TM"+randomNum)
    }
   
    get save(){
        return $(`//input[@title='Save [Alt+S]']`)

    }
    async saveBtn(){
        await this.save.click()
    }
}
module.exports = new createContactPage();