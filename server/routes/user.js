const express = require('express');

const booking = require('../controllers/booking')
const checkReservation = require('../controllers/checkReservation')

const router = express.Router();

router.post("/booknow", booking);

router.get('/checkReservation', checkReservation)

module.exports = router;