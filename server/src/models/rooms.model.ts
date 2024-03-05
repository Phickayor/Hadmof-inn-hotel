import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      unique: true,
      required: [true, "Room name is required"]
    },
    price: {
      type: Number,
      required: true
    },
    roomDescription: {
      type: String,
      required: true
    },
    roomPictures: {
      ref: "pictures",
      type: [mongoose.Schema.ObjectId]
    }
  },
  {
    timestamps: true
  }
);

const roomModel = mongoose.model("rooms", roomSchema);
module.exports = roomModel;
