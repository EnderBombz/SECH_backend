const express = require('express');
const router = express.Router();

const auth = require("./authentication/auth")


const devolution = require('./devolution');
const maintance = require("./maintance")
const users = require("./users")
const werehouse = require('./werehouse')
const equipmentRequest = require("./equipmentRequest")

const authMiddleware = require('../middleware/auth')


router.use("/api/auth", auth);
//router.use(authMiddleware);
router.use("/devolution", devolution);
router.use("/maintance", maintance);
router.use("/users", users);
router.use("/equipment-requests", equipmentRequest);
router.use("/werehouse", werehouse);


module.exports = router;