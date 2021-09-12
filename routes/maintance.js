const express = require('express');
const router = express.Router();
const maintanceController = require('../controllers/maintance')

router.get("/getAll", maintanceController.getAll);
router.get("/get/:itemId", maintanceController.getOne);
router.post("/post", maintanceController.postMaintance);
router.delete("/delete/:itemId", maintanceController.deleteMaintance);
router.put("/put/:itemId", maintanceController.putMaintance);


module.exports = router;