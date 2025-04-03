import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Use the connection string from environment variables, or fallback to hardcoded MongoDB Atlas string
const mongoUri =
  process.env.MONGODB_URI ||
  "mongodb+srv://A3rb3ar:Aerbear2004!@bookquest-cluster.ctqb03h.mongodb.net/?retryWrites=true&w=majority&appName=bookquest-cluster";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

export default mongoose.connection;
