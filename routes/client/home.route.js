const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/home.controller");


// routing products , controller là hàm
router.get('/', controller.index);

module.exports = router;