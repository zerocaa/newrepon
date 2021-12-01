//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const PayController = require('../app/controllers/PayController');

router.use('/', PayController.pay);

//export router
module.exports = router;