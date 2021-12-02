//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const ProductController = require('../app/controllers/ProductController');
//route

router.get('/productDetail', ProductController.test);
router.get('/:slug', ProductController.show);
router.get('/', ProductController.product);

//export router
module.exports = router;