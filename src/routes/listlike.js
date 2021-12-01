//import express
const express = require('express');
//import router & newsController
const router = express.Router();
const ListLikeController = require('../app/controllers/ListLikeController');

router.get('/', ListLikeController.listlike);

//export router
module.exports = router;