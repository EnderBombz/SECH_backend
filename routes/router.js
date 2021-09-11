const express = require('express');
const router = express.Router();

const auth = require("./authentication/auth")
const devolucao = require('./devolucao');
const werehouse = require('./werehouse')
const manutencao = require("./manutencao")
const usuarios = require("./usuarios")
const equipamentos = require("./solicitarEquipamento")

router.use("/devolucao", devolucao);
router.use("/estoque", werehouse);
router.use("/manutencao", manutencao);
router.use("/usuarios", usuarios);
//router.use("/equipamentos", equipamentos);

router.use("/api/auth", auth)

module.exports = router;