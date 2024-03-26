const mongoose=require('mongoose');

const menuItemSchems=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
     taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
     },
     is_drink:{
        type:Boolean,
        default:false,
     },
     ingredients:{
         type:[String],
         default:[],
     },
     num_sales:{
        typr:Number,
        default:0,
     }

})


const MenuItem=mongoose.model('MenuItem',menuItemSchems);

module.exports=MenuItem;