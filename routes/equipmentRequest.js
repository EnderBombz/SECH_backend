const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentRequest')

router.get("/getAll", equipmentController.getAll);
router.get("/get/:itemId", equipmentController.getOne);
router.get("/profile-requests/:userId", equipmentController.getProfileRequests);
router.post("/post", equipmentController.postEquipment);
router.delete("/delete/:itemId", equipmentController.deleteEquipment);
router.put("/put/:itemId", equipmentController.putEquipment);


module.exports = router;