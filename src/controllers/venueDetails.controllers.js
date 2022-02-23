const express = require("express");
const VenueDetails = require("../models/venueDetails.model");
const curdController = require("./curd.controller");

const router = express.Router();

//Writting APIS
router.post("", curdController(VenueDetails).post);
router.get("", curdController(VenueDetails).getAll);
router.get("/:id", curdController(VenueDetails).getOne);
router.patch("/:id", curdController(VenueDetails).updateOne);
router.delete("/:id", curdController(VenueDetails).deleteOne);




module.exports = router