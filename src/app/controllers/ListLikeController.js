
class ListLikeController {
    //get /news
    listlike(req, res) {
        res.render('listlike')
    }
}
module.exports = new ListLikeController()
