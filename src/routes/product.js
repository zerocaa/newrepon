//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const ProductController = require('../app/controllers/ProductController');
//route
router.get('/:slug', ProductController.slug);
router.get('/productDetail', ProductController.test);
router.get('/', ProductController.product);

//export router
module.exports = router;