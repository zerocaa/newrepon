
class IntroController {
    //get /news
    intro(req, res) {
        res.render('intro')
    }
}
module.exports = new IntroController()
