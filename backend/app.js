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

app.get('/home/user/CityRestaurants/filters',(req,res)=>{
    const location= req.query.location;
    const cuisine= req.query.cuisine;
    // console.log(req.query);
    if(location){
        restaurantsModel.find({location: {$regex: location}}).then(result=>{
            res.send(result);
        }).catch(err=> console.log(err));
        return;
    }
    if(cuisine){
        restaurantsModel.find({}).then(result=>{
            
            let resArr=[];
            result.forEach(hotel=>{
                hotel.cuisines.forEach(currcuisine=>{
                    // console.log(currcuisine.cuisineName);
                    if(currcuisine.cuisineName===cuisine){
                        resArr.push(hotel);
                    }
                })
            })
            // console.log(resArr);
            res.send(resArr);
        }).catch(err=> console.log(err));
    }
})

app.get('/home/user/CityRestaurants/:searchedName',(req,res)=>{
    // console.log(req.params,"yaya");
    const searchedName= req.params.searchedName;
    restaurantsModel.find({name: {$in: new RegExp(searchedName,"i")}}).then(result=>{
        res.send(result);
    }).catch(err=>console.log(err));
})




module.exports= app;