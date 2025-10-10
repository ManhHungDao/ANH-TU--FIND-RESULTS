import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import itemRoutes from "./routes/item.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => res.json({ ok: true, message: "API is running" }));

// Routes
app.use("/api/items", itemRoutes);

// Start
const PORT = process.env.PORT || 4000;
await connectDB(process.env.MONGO_URI);
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
