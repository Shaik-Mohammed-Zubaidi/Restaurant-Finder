const app= require('./app');
const mongoose= require('mongoose');

mongoose
  .connect("mongodb://localhost/restaurants", { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Exception Occured ", err));

app.listen(5000, () => console.log("Listening on port 5000"));
