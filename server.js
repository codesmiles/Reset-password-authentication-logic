// jshint esversion: 6
require("dotenv").config();
const express = require("express");
const authRoutes =require("./routes/authRoute")

const app = express()


// MIDDLEWARES
app.use(express.json());
app.use(`/`, authRoutes);

//IMPORT MONGOOSE-----------------------------------------------------------------
const mongoose = require("mongoose"); //import mongoose
// const url = `mongodb://localhost:27017/getTechie`;
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_CLUSTER_PASSWORD}@gettechiecluster.ctmrvus.mongodb.net/?retryWrites=true&w=majority`;
// connect to mongoose

mongoose.connect(url, function (err) { 
  if (err) { console.log(err); }
  else{
  console.log(`Connected to MongoDB`);
}
});

// -----------------------------------------------------------------


const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})