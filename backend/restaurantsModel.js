const mongoose= require('mongoose');

const restaurantsArraySchema= new mongoose.Schema({
    name: String,
    location: String,
    cuisines: [{cuisineName: String,dishName: String}]
})

const restaurantsModel= mongoose.model('restaurantsArray',restaurantsArraySchema);

module.exports = restaurantsModel;