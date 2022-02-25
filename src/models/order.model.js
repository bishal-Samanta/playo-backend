//Create schema and model
const mongoose = require("mongoose");

// club_id: "6214cf82cdd22b390804f680"
// cost: 2200
// court: "9 a Side Court 1"
// duration: 1
// order_id: "order_J0508DLLnTzhwx"
// psyment_id: "pay_J05136smOZc6zR"
// time: "12.00 AM 05.00 AM"
// user_id: "6216782fa45e9fea78dfae19"



//Create Schema
const orderSchema = new mongoose.Schema(
    {
        club_id: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "venue",
            required: true
        },
        cost: {type: Number , required: true},
        court: {type: String , required: true},
        duration: {type: Number, required: true},
        order_id: {type:String , required: true , unique: true },
        payment_id:{type: String , required: true , unique: true },
        time: {type: String , required: true},
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        }

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

//Create Module and Import It
module.exports = mongoose.model("order", orderSchema);

