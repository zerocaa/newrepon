
class ContactController {
    //get /news
    contact(req, res) {
        res.render('contact')
    }
}
module.exports = new ContactController()
