//Express Stff start
const express = require("express");
const app = express();
app.use(express.json());

//Express stuff end
const path = require("path");




//Connect with database start
const connect = require("./configs/db");
//Connect with database End



//Main Code Starts 
//Import Controllers start

const venueDetailsController = require("./controllers/venueDetails.controllers");
const eventdetailsController = require("./controllers/eventDetails.controller");
const userController = require("./controllers/user.controller");




//Import Controllers Ends

//Use Controllers with route start

app.use("/venues" , venueDetailsController);
app.use("/events" , eventdetailsController);
app.use("/login" , userController)






//Use Controllers with route end
//Main Code Ends

let port = process.env.PORT || 1232

//Start Server
app.listen(port, async ()=>{
    try{
        await connect();
        console.log(`Listening on port ${port}`);
    }
    catch(e){
        console.error("Error is" , e.message);
    }
} )

//End server code
