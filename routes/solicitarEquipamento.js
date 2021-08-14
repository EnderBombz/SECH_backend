const express = require('express');
const router = express.Router();
const equipamentoController = require('../controllers/solicitarEquipamento')

router.get("/getAll", equipamentoController.getAll);
router.get("/get/:itemId", equipamentoController.getOne);
router.post("/post", equipamentoController.postEquipamento);
router.delete("/delete/:itemId", equipamentoController.deleteEquipamento);
router.put("/put/:itemId", equipamentoController.putEquipamento);


module.exports = router;