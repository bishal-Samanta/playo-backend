const { body , validationResult } = require("express-validator");

//const Contact = require("../models/contactus.model");

// name: { type: String, required: true},
//         mobileNumber: {type: Number , required: true},
//         email: {type : String , required: true },
//         message: {type: String , required: true}


//Validations For Contact us form 
const contactusValidation = () =>{
    return [
        //Name
        body("name").isString().isLength({min: 3, max: 20}).withMessage("Name should be between 3-20 charecters"),

        //Mobile Number
        body("mobileNumber").isMobilePhone().withMessage("Please give a valid mobile number"),

        //Email
        body("email").isEmail().withMessage("Plesae give a valid email"),

        
    ]
}


// let userObj = {
//     firstName: obj.f,
//     lastName: obj.l,
//     email: obj.e,
//     mobileNumber: mobnum
// }

const userRegistration = () =>{
   return [ 
    //    body("firstName").isString().isLength({min: 3, max: 20}).withMessage("Fist Name should be between 3-20 charecters"),

    //    body("lastName").isString().isLength({min: 3, max: 20}).withMessage("Last Name should be between 3-20 charecters"),

    //    body("email").isEmail().withMessage("Email should be valid"),

       body("mobileNumber").isNumeric().custom((value)=>{
           if(value > 999999999 && value <9999999999){
               return true;
           }
           return false;
       }).withMessage("Mobile number should be valid")
   ]
}


const userUpdate = () =>{
    return [ 
        body("firstName").isString().isLength({min: 3, max: 20}).withMessage("Fist Name should be between 3-20 charecters"),
 
        body("lastName").isString().isLength({min: 3, max: 20}).withMessage("Last Name should be between 3-20 charecters"),
 
        body("email").isEmail().withMessage("Email should be valid"),
       
    ]
 }






module.exports = { contactusValidation , userRegistration , userUpdate }