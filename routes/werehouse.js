const express = require('express');
const router = express.Router();
const werehouseController = require('../controllers/werehouse')

router.get("/getAll", werehouseController.getAll);
router.get("/get/:itemId", werehouseController.getOne);
router.get("/getPeripheals", werehouseController.getPeripheals);
router.get("/getComputers", werehouseController.getComputers);
router.get("/getFreePeripheals", werehouseController.getFreePeripheals);
router.get("/getFreeComputers", werehouseController.getFreeComputers);

router.put("/put-free/:itemId", werehouseController.putfreeWerehouse);

router.post("/post", werehouseController.postWerehouse);
router.delete("/delete/:itemId", werehouseController.deleteWerehouse);
router.put("/put/:itemId", werehouseController.putWerehouse);


module.exports = router;