const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/delete')

router.delete("/controller/delete", deleteController.delete);

module.exports = router;