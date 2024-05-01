import mongoose from "mongoose";

const attendenceSchema = new mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: true,
  },

  employeeName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const attendenceModel = new mongoose.model("Attendence", attendenceSchema);
export default attendenceModel;
