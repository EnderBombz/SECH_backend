const express = require('express');
const putController = require('../controllers/put');
const router = express.Router();

router.put("/controller/put", putController.put)

module.exports = router;