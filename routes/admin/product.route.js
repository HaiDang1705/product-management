const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/product.controller");


// routing products , controller là hàm
router.get('/', controller.index);

module.exports = router;