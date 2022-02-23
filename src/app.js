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





//Import Controllers Ends

//Use Controllers with route start

app.use("/venues" , venueDetailsController);






//Use Controllers with route end
//Main Code Ends


//Start Server
app.listen(1232, async ()=>{
    try{
        await connect();
        console.log("Listening on port 1232");
    }
    catch(e){
        console.error("Error is" , e.message);
    }
} )

//End server code