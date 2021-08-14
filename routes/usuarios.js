const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios')

router.get("/getAll", usuariosController.getAll);
router.get("/get/:userId", usuariosController.getOne);
router.post("/post", usuariosController.postUsuarios);
router.delete("/delete/:userId", usuariosController.deleteUsuarios);
router.put("/put/:userId", usuariosController.putUsuarios);


module.exports = router;