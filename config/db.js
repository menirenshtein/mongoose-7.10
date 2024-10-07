import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://meni:m123456@cluster0.sodwf.mongodb.net/Store?retryWrites=true&w=majority`
    );
    console.log("mongo connect:"  + connect.connection.host);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
