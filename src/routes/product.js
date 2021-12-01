//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const ProductController = require('../app/controllers/ProductController');

router.use('/', ProductController.product);

//export router
module.exports = router;