const express = require("express");
const eventDetails = require("../models/eventDetails.model");
const curdController = require("./curd.controller");

const router = express.Router();

//Writting APIS
router.post("", curdController(eventDetails).post);
router.get("", curdController(eventDetails).getAll);
router.get("/:id", curdController(eventDetails).getOne);
router.patch("/:id", curdController(eventDetails).updateOne);
router.delete("/:id", curdController(eventDetails).deleteOne);




module.exports = router