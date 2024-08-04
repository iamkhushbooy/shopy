import mongoose from "mongoose";
export const ConnectDB=async()=>{
  try {
    const x=await mongoose.connect(process.env.MONGO_URI!)
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Not Connected");
  }
}