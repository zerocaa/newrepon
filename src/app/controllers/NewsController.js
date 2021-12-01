
class NewsController {
    //get /news
    async index(req, res) {
        res.render('news')
    }
    
}
module.exports = new NewsController()
