//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const CartController = require('../app/controllers/CartController');



router.get('/pay', CartController.thanhtoan);
router.get('/', CartController.cart);
router.get('/:slug', CartController.show);
//export router
module.exports = router;