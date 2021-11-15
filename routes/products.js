const express = require("express");
const router = express.Router();

const { addProductType } = require("../controllers/product-type");
const { validateUserToken, validateManager } = require("../lib/ath");

router.post("/add", validateUserToken, validateManager, addProductType);


module.exports = router;