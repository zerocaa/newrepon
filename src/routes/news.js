//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const newsController = require('../app/controllers/newsController');


//newController.index
router.get('/', newsController.index);

//export router
module.exports = router;