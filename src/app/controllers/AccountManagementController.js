
class AccountManagementController {
    //get /news
    accountManagement(req, res) {
        res.render('accountManagement')
    }
}
module.exports = new AccountManagementController()
