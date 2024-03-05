import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  username: {
    type: String,
    unique: true
  }
});

const authModel = mongoose.model("auth", authSchema);
module.exports = authModel;
