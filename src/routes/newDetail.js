//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const NewDetailController = require('../app/controllers/NewDetailController');

router.use('/', NewDetailController.newdetail);

//export router
module.exports = router;