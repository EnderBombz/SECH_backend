const express = require('express');
const router = express.Router();
const manutencaoController = require('../controllers/manutencao')

router.get("/getAll", manutencaoController.getAll);
router.get("/get/:itemId", manutencaoController.getOne);
router.post("/post", manutencaoController.postManutencao);
router.delete("/delete/:itemId", manutencaoController.deleteManutencao);
router.put("/put/:itemId", manutencaoController.putManutencao);


module.exports = router;