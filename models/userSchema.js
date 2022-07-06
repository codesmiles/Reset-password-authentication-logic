const mongoose = require("mongoose");
const { Schema } = mongoose;

// input your schema here and export them
const user = new Schema({
  fullName: {
    required: true,
    type: String,
  },
  emailAddress: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const userSchema = mongoose.model("users", user);
module.exports = userSchema;
