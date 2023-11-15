const express = require("express");
const app = express();
const cors = require("cors");
const reservationSchema = require("./models/model");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const userRouter = require('./routes/user')


app.use('/api/user/', userRouter);


app.use(express.json());

app.use(cors({ origin: "*" }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "needresturant@gmail.com",
    pass: "xblkdydtytuzwpee",
  },
});

app.listen(8500, () => {
  mongoose
  .connect(
    "mongodb+srv://Phanindra_0:1234@cluster0.bon3a4o.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected and server...."))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
});
