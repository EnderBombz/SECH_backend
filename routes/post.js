const express = require('express');
const router = express.Router();
const postController = require('../controllers/post')

router.post("/controller/post", postController.post);

module.exports = router;