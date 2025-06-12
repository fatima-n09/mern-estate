import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avator: {
      type: String,
      default: "https://www.pinterest.com/pin/17732992277868306/"
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
