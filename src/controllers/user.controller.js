const express = require("express");
const User = require("../models/user.model");
const curdController = require("./curd.controller");

const { welcomeMail } = require("../utils/sendEmail");
const Eventemitter = require("events");
const eventEmitter = new Eventemitter();


const router = express.Router();
const { userRegistration } = require("../middlewares/validations");
const { body , validationResult } = require("express-validator");

//Writting APIS
router.post("", userRegistration() , async (req, res)=>{
    try{
        //code 
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(500).json({erros: errors.array()});
        }

        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(500).send({message: "You are already egistered with us"});
        }
        user = await User.create(req.body);

         //Send welcome Email
         eventEmitter.on("user signup" , await welcomeMail);

         eventEmitter.emit("user signup" , {
             from: "work.bishalsamanta@gmail.com",
             to: user.email,
             user,
         })


        return res.status(201).send(user);
    }
    catch(e){
        return res.status(500).send({message: e.message});
    }
});


router.get("", curdController(User).getAll);
router.get("/:id", curdController(User).getOne);
router.patch("/:id", curdController(User).updateOne);
router.delete("/:id", curdController(User).deleteOne);




module.exports = router