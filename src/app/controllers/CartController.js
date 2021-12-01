
class CartController {
    //get /news
    cart(req, res) {
        res.render('cart');
    }
    thanhtoan(req, res) {
        res.render('pay')
    }show(req, res) {
        res.render('refresh')
    }
}
module.exports = new CartController()
