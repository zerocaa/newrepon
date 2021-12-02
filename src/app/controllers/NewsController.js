
class NewsController {
    //get /news
    new(req, res) {
        res.render('news')
    }
    newdetail(req, res) {
        res.render('newDetail')
    }
    show(req, res) {
        res.render('errorpage')
    }
    
}
module.exports = new NewsController()
