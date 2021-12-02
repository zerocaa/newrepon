//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const LoginController = require('../app/controllers/LoginController');

router.get('/', LoginController.login);

//export router
module.exports = router;