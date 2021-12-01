//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const homeController = require('../app/controllers/homeController');
router.get('/', homeController.index);
//export router
module.exports = router;