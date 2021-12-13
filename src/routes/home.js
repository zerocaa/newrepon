//import express

const express = require('express');
//import router & newsController
const router = express.Router();
const homeController = require('../app/controllers/homeController');
router.get('/', homeController.home);
//registration
router.get('/registration', homeController.homeregistration);
router.post('/registration', homeController.createUser);
//login
router.get('/login', homeController.homelogin);
// router.post('/login', homeController.postlogin);
//export router
module.exports = router;