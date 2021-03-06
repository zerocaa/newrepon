//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const accountManagementController = require('../app/controllers/accountManagementController');

router.get('/', accountManagementController.accountManagement);

//export router
module.exports = router;