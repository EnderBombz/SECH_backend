const express = require('express');
const router = express.Router();
const devolutionController = require('../controllers/devolution')

router.get("/getAll", devolutionController.getAll);
router.get("/get/:itemId", devolutionController.getOne);
router.post("/post", devolutionController.postDevolution);
router.delete("/delete/:itemId", devolutionController.deleteDevolution);
router.put("/put/:itemId", devolutionController.putDevolution);


module.exports = router;