const mongoose=require('mongoose');
require('dotenv').config();



//Define the ,mongodb connection Url
//const mongoUrl="mongodb://127.0.0.1:27017/hotels"
const mongoUrl=process.env.MONGODB_URL

//set up mongodb connection
mongoose.connect(mongoUrl);


const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDb server');
})

db.on('error',()=>{
    console.log('error to MongoDb server');
})

db.on('disconnected',()=>{
    console.log('disconnected to MongoDb server');
})


module.exports=db
