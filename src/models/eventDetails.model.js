//Create schema and model
const mongoose = require("mongoose");

// "city": "hyderabad",
//         "name": "Daniel Cricket Academy",
//         "location": "hyderabad",
//         "image": "https://playo-activities.gumlet.io/DANIELSCRICKETACADEMY/DanielsCricketAcademycover1502371285385.jpg?q=40",
//         "timing": " 6 AM - 8 AM, 4 PM - 8 PM ",
//         "id": 1,
//         "image2": "https://playo-activities.gumlet.io/DANIELSCRICKETACADEMY/DanielsCricketAcademyIMG0.jpg",
//         "overview": "DANIEL KANAPARTHI, a Level II certified Coach from England and Wales Cricket Board (ECB, United Kingdom), is always passionate for his all time favourite dream game “CRICKET”, has opted it as a career and opened his own Academy - DANIEL’S CRICKET ACADEMY in Hyderabad.Daniel is also an active member of England and Wales Cricket Coaches Association. Having great passion for cricket Daniel has taken up a challenging responsibility of grooming the upcoming players for INDIA.DCA is not just a cricket coaching academy, it has grown as a team, a family with bonding among, students, coaches and parents.",
//         "goals": " To maintain quality coaching standards and contribute best cricket players to represent INDIA.Identifying the talented boys having passion for cricket and ensuring wide range of support, encouragement and guidance to achieve the goal.To make coaching facilities available and accessible to the talented boys from towns and villages of Telangana and Andhra Pradesh",
//         "services": 


//Create Schema
const eventSchema = new mongoose.Schema(
    {
        city: { type: String, required: true},
        name: {type: String , required: true },
        location: {type :String , required: true},
        image: {type: String , required: true},
        timing: {type: String , required : true},
        id: {type: Number , required: true},
        image2: {type: String , required: true},
        overview: {type: String , required: true },
        goals: {type: String , required : true}

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

//Create Module and Import It
module.exports = mongoose.model("event", eventSchema);

