import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";
import cors from "cors";
import connectDB from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port : ", PORT);
  connectDB();
});
