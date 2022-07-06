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
const url = `mongodb://localhost:27017/getTechie`;
// connect to mongoose

mongoose.connect(url, function (err) { 
  if (err) { console.log(err); }
  else{
  console.log(`Connected to MongoDB`);
}
});

// -----------------------------------------------------------------


const port = 3000 || process.env.PORT
app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})