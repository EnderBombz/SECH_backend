const express = require('express');
const router = express.Router();


const delete_ = require('./delete');
const get = require('./get')
const put = require("./put")
const post = require("./post")
const auth = require("./authentication/auth")

router.use("/api/get", get);
router.use("/api/delete", delete_)
router.use("/api/put", put)
router.use("/api/post", post)
router.use("/api/auth", auth)

module.exports = router;