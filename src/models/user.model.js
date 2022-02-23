//Create schema and model
const mongoose = require("mongoose");

const bcryptjs = require("bcryptjs");
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
        mobileNumber: {type: Number , required: true},
        password: {type: Date , required: false , default: Date.now }
                      
     
    },
    {
        versionKey: false,
        timestamps: true,
    }
);


//Schema
userSchema.pre("save" , function(next){
    if(!this.isModified("password")) return next();
    var hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash;
    return next();
})



//Create Module and Import It
module.exports = mongoose.model("user", userSchema);

