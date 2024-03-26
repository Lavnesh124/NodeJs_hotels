const express = require('express')
const app = express();
const db=require('./db');
const Person=require('./models/person');
const MenuItem=require('./models/MenuItem');


const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('welcome to my hotel...how can i help you? we have list of menu')
})

app.post('/person',async (req,res)=>{
  console.log("reached");
  try{
    const data=req.body //Assuming the request body constanin the person data

    //Create a new Person document using the Mongoose model
    const newPerson=new Person(data);
  
    const response=await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:"Internal Server Error"});
  }
})

app.get("/person",async(req,res)=>{
  try{
    const data= await Person.find()
    console.log('data fetched')
    res.status(200).json(data)

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});

  }

})
app.post('/menu',async(req,res)=>{
  try{
    const data=req.body 
    const newMenuItem= new MenuItem(data);
    const respose =await newMenuItem.save();
    console.log("data save");
    return res.status(200).jason(respose);


  }
  catch{
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

app.get('/menu',async (req,res)=>{
  try{
    const data= await MenuItem.find()
    console.log('data fetched')
    res.status(200).json(data)
       
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

app.listen(3000,()=>{
  console.log('listening on port 3000');
})



