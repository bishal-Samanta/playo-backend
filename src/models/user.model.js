//Create schema and model
const mongoose = require("mongoose");


// let userObj = {
//     firstName: obj.f,
//     lastName: obj.l,
//     email: obj.e,
//     mobileNumber: mobnum
// }


//Create Schema
const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true},
        lastName: { type : String, required: true },
        email: {type: String , required: true},
        mobileNumber: {type: Number , required: true}
                      
     
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

//Create Module and Import It
module.exports = mongoose.model("user", userSchema);

