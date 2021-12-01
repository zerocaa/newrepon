//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const RegistrationController = require('../app/controllers/RegistrationController');

router.get('/', RegistrationController.registration);

//export router
module.exports = router;