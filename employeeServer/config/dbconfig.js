import mongoose from "mongoose";

const mongodbconnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ubmishra200:passwordemployeemangement@cluster0.0ddrkrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongoose connected successfully");
  } catch (error) {
    console.log("Error in mongoose connection", error);
  }
};
export default mongodbconnect;
