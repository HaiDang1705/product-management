const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/dashboard.controller");


// routing products , controller là hàm
router.get('/', controller.dashboard);

module.exports = router;