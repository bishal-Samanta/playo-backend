const express = require("express");
const User = require("../models/user.model");
const curdController = require("./curd.controller");

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
        
        return res.status(500).send(user);
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