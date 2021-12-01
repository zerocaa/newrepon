
class ProductController {
    //get /news
    
    product(req, res) {
        res.render('product')
    }
    test(req, res) {
        res.render('productDetail')
    }
    slug(req, res) {
        res.send('vui long tro lai trang chu')
    }
}
module.exports = new ProductController()
