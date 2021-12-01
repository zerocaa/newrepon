
class CartController {
    //get /news
    cart(req, res) {
        res.render('cart')
    }
}
module.exports = new CartController()
