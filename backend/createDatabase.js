const mongoose = require('mongoose')
const restaurantsModel = require('./restaurantsModel')
const restaurantsData = require('./restaurantsData')

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/restaurants";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await restaurantsModel.deleteMany({})
    await restaurantsModel.insertMany(restaurantsData);
    await mongoose.disconnect();
}
refreshAll().then(_=> console.log("database created")).catch(err=> console.log("error: ",err));