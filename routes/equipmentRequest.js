const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentRequest')

router.get("/getAll", equipmentController.getAll);
router.get("/get/:itemId", equipmentController.getOne);
router.get("/profile-requests/:userId", equipmentController.getProfileRequests);
router.get("/have-request/:userId", equipmentController.getHaveProfileRequest);

router.get("/approvals", equipmentController.getAllPendingRequest);
router.get("/approvals/:userId", equipmentController.getUserPendingRequest);

router.post("/post", equipmentController.postEquipment);
router.delete("/delete/:itemId", equipmentController.deleteEquipment);

router.put("/put/:itemId", equipmentController.putEquipment);
router.put("/put-finish/:itemId", equipmentController.putFinishEquipment);


module.exports = router;