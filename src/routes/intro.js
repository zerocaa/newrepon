//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const IntroController = require('../app/controllers/IntroController');

router.use('/', IntroController.intro);

//export router
module.exports = router;