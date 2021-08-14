const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoque')

router.get("/getAll", estoqueController.getAll);
router.get("/get/:itemId", estoqueController.getOne);
router.post("/post", estoqueController.postEstoque);
router.delete("/delete/:itemId", estoqueController.deleteEstoque);
router.put("/put/:itemId", estoqueController.putEstoque);


module.exports = router;