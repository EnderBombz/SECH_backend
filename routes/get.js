const express = require('express');
const router = express.Router();
const getController = require('../controllers/get')

router.get("/controller/get", getController.get);
router.get("/mongoTest", getController.mongoTest)

module.exports = router;