//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const CartController = require('../app/controllers/CartController');

router.use('/', CartController.cart);

//export router
module.exports = router;