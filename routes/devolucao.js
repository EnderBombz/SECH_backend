const express = require('express');
const router = express.Router();
const devolucaoController = require('../controllers/devolucao')

router.get("/getAll", devolucaoController.getAll);
router.get("/get/:itemId", devolucaoController.getOne);
router.post("/post", devolucaoController.postDevolucao);
router.delete("/delete/:itemId", devolucaoController.deleteDevolucao);
router.put("/put/:itemId", devolucaoController.putDevolucao);


module.exports = router;