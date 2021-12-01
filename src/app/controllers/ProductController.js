
class ProductController {
    //get /news
    product(req, res) {
        res.render('product')
    }
}
module.exports = new ProductController()
