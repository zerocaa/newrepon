
class NewsController {
    //get /news
    async new(req, res) {
        res.render('news')
    }
    
}
module.exports = new NewsController()
