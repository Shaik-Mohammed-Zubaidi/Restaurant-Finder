const express= require('express');
const restaurantsModel= require('./restaurantsModel');

const app= express();

// Parse JSON bodies
app.use(express.json());

app.post('/home/owner',(req,res)=>{
    const restaurant= new restaurantsModel({...req.body});
    restaurant.save().then(()=>res.send("posted")).catch(error=> console.log(error));
    // console.log(req.body);
    // res.send("posted");
})

module.exports= app;