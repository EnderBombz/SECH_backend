const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentRequest')

router.get("/getAll", equipmentController.getAll);
router.get("/get/:itemId", equipmentController.getOne);
router.get("/profile-requests/:userId", equipmentController.getProfileRequests);
router.get("/have-request/:userId", equipmentController.getHaveProfileRequest);

router.get("/equipment/approvals", equipmentController.getAllEquipmentPendingRequest);
router.get("/equipment/approvals/:userId", equipmentController.getUserEquipmentPendingRequest);

router.get("/maintance/approvals", equipmentController.getAllMaintancePendingRequest);
router.get("/maintance/approvals/:userId", equipmentController.getUserMaintancePendingRequest);

router.get("/devolution/approvals", equipmentController.getAllDevolutionPendingRequest);
router.get("/devolution/approvals/:userId", equipmentController.getUserDevolutionPendingRequest);

router.post("/post", equipmentController.postEquipment);
router.delete("/delete/:itemId", equipmentController.deleteEquipment);

router.put("/put/:itemId", equipmentController.putEquipment);

router.put("/put-finish/:itemId", equipmentController.putFinishEquipment);
router.put("/put-equipment-maintance/:itemId", equipmentController.putFinishEquipmentMaintance);
router.put("/put-equipment-devolution/:itemId", equipmentController.putFinishEquipmentDevolution);
router.put("/put-response/:itemId", equipmentController.putResponseEquipment);


module.exports = router;