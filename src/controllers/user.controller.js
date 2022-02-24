const express = require("express");
const User = require("../models/user.model");
const curdController = require("./curd.controller");

//Sending email 
const { welcomeMail } = require("../utils/sendEmail");
const Eventemitter = require("events");
const eventEmitter = new Eventemitter();

//Router
const router = express.Router();

//Validations
const { userRegistration } = require("../middlewares/validations");
const { body , validationResult } = require("express-validator");

//Authentications
const jwt = require("jsonwebtoken");
require("dotenv").config()


//Functions for creating token 
const newToken = (user) =>{
    return jwt.sign({user} , "secrect_key");
}


//Writting APIS when user first logged in
router.post("", userRegistration() , async (req, res)=>{
    try{
        //code 
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(500).json({erros: errors.array()});
        }

        let user = await User.findOne({mobileNumber: req.body.mobileNumber });
        if(user){
            //Update users with new data
            let token = newToken(user);
            return res.status(201).send({user , token});
        }


        //If user not exist then create users
        user = await User.create(req.body);

        //Create token with user details
        let token = newToken(user);


         //Send welcome Email
        //  eventEmitter.on("user signup" , await welcomeMail);

        //  eventEmitter.emit("user signup" , {
        //      from: "work.bishalsamanta@gmail.com",
        //      to: user.email,
        //      user,
        //  })


        return res.status(201).send({user, token});
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