const express = require('express');
const booking = require('../controllers/booking')
const checkReservation = require('../controllers/checkReservation');
const { signup  , login} = require('../controllers/signup');
const tableDelete = require('../controllers/tableEntrydelete');
const getAlldetails = require('../controllers/getAlldetails');

const router = express.Router();
router.get("/" , async(req,res)=>{
    res.send("welcome to our restaurant")
})
router.post("/signup" , signup)
router.post("/login" , login)
router.post("/booknow", booking);
router.post('/checkReservation', checkReservation)
router.get("/dashboard/:tableNumber", tableDelete)
router.get("/dashboard/tables/reservedtables", getAlldetails )

module.exports = router;