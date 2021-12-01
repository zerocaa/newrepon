//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const newsController = require('../app/controllers/NewsController');


//newController.index
router.get('/', newsController.new);

//export router
module.exports = router;