const express = require('express');
const router = express.Router();
const werehouseController = require('../controllers/werehouse')

router.get("/getAll", werehouseController.getAll);
router.get("/get/:itemId", werehouseController.getOne);
router.get("/getPeripheals", werehouseController.getPeripheals);
router.get("/getComputers", werehouseController.getComputers);


router.post("/post", werehouseController.postWerehouse);
router.delete("/delete/:itemId", werehouseController.deleteWerehouse);
router.put("/put/:itemId", werehouseController.putWerehouse);


module.exports = router;