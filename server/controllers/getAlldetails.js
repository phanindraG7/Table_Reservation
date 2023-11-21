const reservationSchema = require('../models/Reservation')


const getAlldetails = async(req, res)=>{
    const allDetails = await reservationSchema.find();
    if(allDetails)
    {
        res.status(200).json(allDetails);
    }
}

module.exports = getAlldetails