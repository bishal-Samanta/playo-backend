//Create schema and model
const mongoose = require("mongoose");

// "name": "ABR Sports",
//       "ratingCount": 9,
//       "lat": 12.87948,
//       "lng": 77.738298,
//       "rating": 4,
//       "location": "Bangalore",
//       "imgUrl" : "https://playo.gumlet.io/RAYCENTERWILSONGARDEN/RayCenterWilsonGarden1639894020276.jpg?auto=compress%2Cformat&fit=clip&q=30&h=0.4&dpr=1&w=1946",
//       "filter_by": [
//         "Cricket"
//       ],
//       "info": 



//Create Schema
const venueSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},              //
        ratingCount: {type: Number , required: false},   
        lat: {type: Number , required: false},
        lng:{type: Number, required: false},
        location: {type: String , required: true },        //
        imgUrl: {type: String , required: true },           //
        filter_by: [{type: String , required: true}],      // 
        rating: {type: Number , required: false },       
        info: {type : String , required: false}

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

//Create Module and Import It
module.exports = mongoose.model("venue", venueSchema);

