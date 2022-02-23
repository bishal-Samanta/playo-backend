//Create schema and model
const mongoose = require("mongoose");



//Create Schema
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},              //
     
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

//Create Module and Import It
module.exports = mongoose.model("user", userSchema);

