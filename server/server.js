const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require('./routes/Routes');
app.use(cors());

const url = 'mongodb+srv://chandra123:chandra123@cluster0.fnoyvit.mongodb.net/Hotel?retryWrites=true&w=majority';

mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(express.json());

app.use('/' ,userRouter)


app.listen(3000, () => {
 console.log("Server started at port 3000");
});
