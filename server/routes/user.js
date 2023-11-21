const express = require('express');
const booking = require('../controllers/booking')
const checkReservation = require('../controllers/checkReservation');
const { signup  , login} = require('../controllers/signup');
const mongoose  = require('mongoose');


const router = express.Router();
router.get("/" , async(req,res)=>{
    res.send("welcome to our restaurant")
})
router.get("/signup" , signup)
router.post("/login" , login)

router.post("/booknow", booking);
router.get('/checkReservation', checkReservation)


module.exports = router;