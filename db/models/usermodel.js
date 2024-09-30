import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
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
  number: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  googleId: { type: String },
});

const usermodel = mongoose.models.users || mongoose.model("users", userSchema);

export default usermodel;
