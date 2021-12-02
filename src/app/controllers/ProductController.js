
class ProductController {
    //get /news
    
    product(req, res) {
        res.render('product')
    }
    test(req, res) {
        res.render('productDetail')
    }
    show(req, res) {
        res.render('errorpage')
    }
}
module.exports = new ProductController()
