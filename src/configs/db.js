//Connect with mongoose and mongo db
const mongoose = require("mongoose");

const connect = () =>{
    //Put mongo db link 
    return mongoose.connect("mongodb://bishal:bishal_123@cluster0-shard-00-00.ymmgs.mongodb.net:27017,cluster0-shard-00-01.ymmgs.mongodb.net:27017,cluster0-shard-00-02.ymmgs.mongodb.net:27017/playoDatabase?ssl=true&replicaSet=atlas-3a0456-shard-0&authSource=admin&retryWrites=true&w=majority");
}

module.exports = connect;


//Local mongo db link ==> mongodb://127.0.0.1:27017/Database_name
//Mongo atlus link -> mongodb://bishal:bishal_123@cluster0-shard-00-00.ymmgs.mongodb.net:27017,cluster0-shard-00-01.ymmgs.mongodb.net:27017,cluster0-shard-00-02.ymmgs.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3a0456-shard-0&authSource=admin&retryWrites=true&w=majority
