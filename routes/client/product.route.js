const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/product.controller");

// routing products , controller là hàm
router.get("/", controller.index);

router.get("/create", controller.create);

router.get("/delete", controller.delete);

module.exports = router;