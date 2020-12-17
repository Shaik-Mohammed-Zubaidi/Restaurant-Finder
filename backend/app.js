const express= require('express');
const restaurantsModel= require('./restaurantsModel');

const app= express();

// Parse JSON bodies
app.use(express.json());

app.post('/home/owner',(req,res)=>{
    const restaurant= new restaurantsModel({...req.body});
    restaurant.save().then(()=>res.send("posted")).catch(error=> console.log(error));
})

app.get('/home/user',(req,res)=>{
    const city= req.query.city;
    restaurantsModel.find({location: {$regex: city}}).then(result=>{
        res.send(result);
    }).catch(err=> console.log(err));
})

app.get('/home/user/CityRestaurants',(req,res)=>{
    const restaurant= req.query.restaurant;
    restaurantsModel.find({name: {$regex: restaurant}}).then(result=>{
        res.send(result);
    }).catch(err=> console.log(err));
})


module.exports= app;