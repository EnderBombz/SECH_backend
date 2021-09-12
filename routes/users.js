const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

router.get("/getAll", usersController.getAll);
router.get("/get/:userId", usersController.getOne);
router.get("/getByEmail", usersController.getByEmail);
router.post("/post", usersController.postUser);
router.delete("/delete/:userId", usersController.deleteUser);
router.put("/put/:userId", usersController.putUser);


module.exports = router;