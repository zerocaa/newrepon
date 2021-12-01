//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const ProductDetailController = require('../app/controllers/ProductDetailController');

router.get('/', ProductDetailController.productDetail);

//export router
module.exports = router;