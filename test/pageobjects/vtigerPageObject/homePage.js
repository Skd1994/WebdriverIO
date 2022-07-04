class homePage
{
    get contactLink(){
    return $(`//a[text()='Contacts']`)
    }
    async contacts(){
        await this.contactLink.click()
    }
    get organizationLink(){
        return $(`//td[@class='tabUnSelected']//a[text()='Organizations']`)
        }
        async organization(){
            await this.organizationLink.click()
        }
        
        get administrator(){
            return $(`//img[@src='themes/softed/images/user.PNG']`)
            }
            async adminImg(){
                await this.administrator.moveTo()
            }
            get signOut(){
                return $(`//td//a[text()='Sign Out']`)
                }
                async signOutBtn(){
                    await this.signOut.click()
                }

              
}
module.exports = new homePage()