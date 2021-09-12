const express = require('express');
const router = express.Router();

const auth = require("./authentication/auth")


const devolution = require('./devolution');
const maintance = require("./maintance")
const users = require("./users")
const werehouse = require('./werehouse')
const equipmentRequest = require("./equipmentRequest")

router.use("/devolucao", devolution);
router.use("/manutencao", maintance);

router.use("/usuarios", users);
router.use("/solicitacao-equipamentos", equipmentRequest);
router.use("/estoque", werehouse);

router.use("/api/auth", auth)

module.exports = router;