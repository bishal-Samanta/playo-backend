const express = require("express");
const Order = require("../models/order.model");
const curdController = require("./curd.controller");

const router = express.Router();

//Writting APIS
router.post("", curdController(Order).post);
router.get("", curdController(Order).getAll);
router.get("/:id", curdController(Order).getOne);
router.patch("/:id", curdController(Order).updateOne);
router.delete("/:id", curdController(Order).deleteOne);




module.exports = router