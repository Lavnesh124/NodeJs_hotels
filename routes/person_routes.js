const express = require('express')
const router = express();
const Person=require('./../models/person');



router.post('/',async (req,res)=>{
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


  router.get("/",async(req,res)=>{
    try{
      const data= await Person.find()
      console.log('data fetched')
      res.status(200).json(data)
  
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  
    }
  
  })



router.get('/:workType',async(req,res)=>{

    try{
      const workType =req.params.workType;
      if(workType=="chef"  ||workType== "manager" ||workType=="waiter"){
         const response =await Person.find({work:workType});
         console.log("respnse fetched");
         res.status(200).json(response);
    
      }
      else{
        res.status(404).jason ({error:"Invalid work type"});
        }
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })

router.put('/:id',async(req,res)=>{
    try{
        const personId =req.params.id;
        const updatedPersonData=req.body;


        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,
        })

        if(!response){
            return res.status(404).json({error:"person not found"});
        }
        console.log("data updated");
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})
  

router.delete('/:id',async(req,res)=>{
    try{
        const personId =req.params.id;
        const  response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:"person not found"});
        }
        console.log("data deleted");
        res.status(200).json({message: 'person deleted succsesfully'});


    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})
  


  module.exports=router;