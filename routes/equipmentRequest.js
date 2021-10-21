const express = require('express');
const router = express.Router();

const equipmentController = require('../controllers/requests/equipment')
const devolutionController = require('../controllers/requests/devolution')
const maintanceController = require('../controllers/requests/maintance')

router.get("/getAll", equipmentController.getAll);
router.get("/get/:itemId", equipmentController.getOne);
router.get("/profile-requests/:userId", equipmentController.getProfileRequests);
router.get("/have-request/:userId", equipmentController.getHaveProfileRequest);

router.get("/equipment/approvals", equipmentController.getAllEquipmentPendingRequest);
router.get("/equipment/approvals/:userId", equipmentController.getUserEquipmentPendingRequest);

router.post("/post", equipmentController.postEquipment);
router.delete("/delete/:itemId", equipmentController.deleteEquipment);

router.put("/put/:itemId", equipmentController.putEquipment);
router.put("/put-finish/:itemId", equipmentController.putFinishEquipment);
router.put("/put-response/:itemId", equipmentController.putResponseEquipment);

router.get("/maintance/approvals", maintanceController.getAllMaintancePendingRequest);
router.get("/maintance/approvals/:userId", maintanceController.getUserMaintancePendingRequest);
router.put("/put-equipment-maintance/:itemId", maintanceController.putFinishEquipmentMaintance);

router.get("/devolution/approvals", devolutionController.getAllDevolutionPendingRequest);
router.get("/devolution/approvals/:userId", devolutionController.getUserDevolutionPendingRequest);
router.put("/put-equipment-devolution/:itemId", devolutionController.putFinishEquipmentDevolution);



module.exports = router;