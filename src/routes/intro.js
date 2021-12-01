//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const IntroController = require('../app/controllers/IntroController');

//router
router.get('/:slug', IntroController.slug);
router.get('/', IntroController.intro);

//export router
module.exports = router;