import mongoose from "mongoose";

export const connectDB = async (mongoUri) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(mongoUri, {
      // options mặc định ổn với MongoDB 6/7 local
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
