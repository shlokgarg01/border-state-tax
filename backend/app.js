const express = require("express");
const mongoose = require("mongoose");
const orderRouter = require("./routes/place_order");
const messageRouter = require('./routes/message')
const cors = require("cors");
const app = express();
require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const start = () => {
  app.listen(PORT, () => console.log(`Connected to PORT ${PORT}`));
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to database.."))
    .catch((err) => console.log(err));
};

app.get("/ping", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.use("/api/v1", orderRouter)
app.use("/api/v1", messageRouter)

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../frontend/build/index.html")
  );
});


start();
