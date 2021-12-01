
class IntroController {
    //get /news
    intro(req, res) {
        res.render('intro')
    }
    slug(req, res) {
        res.send('vui long tro lai trang chu')
    }
}
module.exports = new IntroController()
