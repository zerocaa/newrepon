//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const ContactController = require('../app/controllers/ContactController');

router.get('/', ContactController.contact);

//export router
module.exports = router;