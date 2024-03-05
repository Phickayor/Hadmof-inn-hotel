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
    type: String
  }
});

const authModel = mongoose.model("auth", authSchema);
export default authModel;
