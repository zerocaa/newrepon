
class RegistrationController {
    //get /news
    registration(req, res) {
        res.render('registration')
    }
}
module.exports = new RegistrationController()
