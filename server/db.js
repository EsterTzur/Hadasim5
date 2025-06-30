// connect to the database in mongodb
const mongoose = require("mongoose");

const connectDB = async () => {
  try{
    await mongoose.connect("mongodb+srv://estertzur1:4fKh2AwXXWSuFdxA@cluster0.ansaj6x.mongodb.net/ShopDB?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
