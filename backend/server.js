const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authroutes=require('./Routes/authroutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authroutes);


const MONGODB_URI =
  "mongodb+srv://maham27:12345@cluster0.7libf.mongodb.net/project?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log(err.message);
  });

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


