
class LoginController {
    //get /news
    login(req, res) {
        res.render('login')
    }
}
module.exports = new LoginController()
