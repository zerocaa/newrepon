//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const NewDetailController = require('../app/controllers/NewDetailController');

router.get('/', NewDetailController.newdetail);

//export router
module.exports = router;