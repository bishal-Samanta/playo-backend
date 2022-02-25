const express = require("express");
const Order = require("../models/order.model");
const curdController = require("./curd.controller");

const router = express.Router();

//Writting APIS
router.post("", curdController(Order).post);

router.get("", async (req, res)=>{
    try{
        const orders = await Order.find().populate({path: "user_id"}).populate({path: "club_id"}).lean().exec();
        return res.status(200).send(orders);
    }
    catch(e){
        return res.status(500).send({message: e.message});
    }
});


router.get("/:id", async (req, res)=>{
    try{
        const order = await Order.findById(req.params.id).populate({path: "user_id"}).populate({path: "club_id"}).lean().exec();
        return res.status(200).send(order);
    }
    catch(e){
        return res.status(500).send({message: e.message});
    }
});

router.patch("/:id", curdController(Order).updateOne);

router.delete("/:id", curdController(Order).deleteOne);





module.exports = router