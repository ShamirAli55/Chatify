import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/",(req,res)=>{
  res.send("homees")
})

app.get("/api/auth/signup", (req, res) => {
  res.send("hello");
});

app.get("/api/auth/login", (req, res) => {
  res.send("Login");
});

app.get("/api/auth/logout", (req, res) => {
  res.send("Logout");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port : ", PORT);
});
