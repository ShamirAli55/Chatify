import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("homees");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port : ", PORT);
});
