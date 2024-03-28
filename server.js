const express = require('express')
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');
require('dotenv').config();


app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('welcome to my hotel...how can i help you? we have list of menu')
})





const personRoutes =require('./routes/person_routes');
app.use('/person',personRoutes);


const menuRoutes=require('./routes/menu_routes');
app.use('/menu',menuRoutes);


const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log('listening on port 3000');
})
  


