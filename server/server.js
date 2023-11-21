const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
//const nodemailer = require("nodemailer");
const userRouter = require('./routes/user');
const booking = require('./controllers/booking')
const checkReservation = require('./controllers/checkReservation');
const { signup  , login} = require('./controllers/signup');

app.use(bodyparser.json({limit: '50mb'}))
var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.use(cors());
app.use(urlencodedParser)

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://chandrsekharancs:1234@cluster0.d8vm6ol.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to the database");
  } catch (error) {
    console.error("Connection to the database failed:", error.message);
  }
};

connectToDatabase();
app.use(express.json());

//const router = express.Router();
app.get("/" , async(req,res)=>{
    res.send("welcome to our restaurant")
})
app.get("/signup" , signup)
app.post("/login" , login)

app.post("/booknow", booking);
app.get('/checkReservation', checkReservation)



app.listen(3000, () => {
 console.log("Server started at port 3000");
});
