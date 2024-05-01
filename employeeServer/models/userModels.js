import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  joindate: {
    type: Date,

    required: true,
    default: Date.now,
  },

  salary: {
    type: Number,
    required: true,
  },
  activeEmployee: {
    type: Boolean,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModels = new mongoose.model("User", userSchema);
export default userModels;
