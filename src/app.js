//Express Stff start
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors")

//Express stuff end
const path = require("path");

app.use(
    cors({
        origin: "*",
    })
)


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});





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


