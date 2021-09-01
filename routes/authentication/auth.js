const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authentication/auth')
const authMiddleware = require('../../middleware/auth')

router.post("/", authController.auth);

router.use(authMiddleware);

router.get("/users", authController.users)


module.exports = router;