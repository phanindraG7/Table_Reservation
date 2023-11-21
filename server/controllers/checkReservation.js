const reservationSchema = require('../models/Reservation')

const checkReservation = async(req,res) => {
   const {tableNumber , reservationDate , reservationTime} = req.body;
   
   const reserved = await reservationSchema.findOne({tableNumber, reservationDate , reservationTime});
   

   if(reserved !=null)
   {
    return res.status(403).json({ Message: 'Table already reserved at this date and time.' });
   }
   else{
     return res.status(200).json({ Message: 'Table is not reserved' }) 
   }
}

module.exports = checkReservation