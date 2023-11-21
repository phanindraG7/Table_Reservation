const reservationSchema = require('../models/Reservation')


const tableDelete = async(req , res) =>{
    const tableNumber = req.params.tableNumber;
    console.log(tableNumber)
    const tabledeletion = await reservationSchema.findOneAndDelete({tableNumber : tableNumber});
    if(tabledeletion)
    {
        return res.status(200).json({ Message: 'Table is Deleted' }) 
    }
}

module.exports = tableDelete