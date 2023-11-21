const reservationSchema = require('../models/Reservation')
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahaofficialott@gmail.com',
    pass: 'mprfnlgrtsdjvycw'
  }
});

const booking = async(req, res) => {
    try {
        const {
          tableNumber,
          capacity,
          reservationDateTime,
          reservationDate,
          customerName,
          customerEmail,
          customerPhone,
          additionalNotes,
          mealOption,
          reservationTime,
          // Add mealOption to the request body
          //time, // Add time to the request body
        } = req.body;
    
        const existingReservation = await reservationSchema.findOne({
          tableNumber,
          reservationDate,
          reservationTime,
        });
        
        if (existingReservation) {
          return res.status(400).json({ error: 'Table already reserved at this date and time.' });
        }
        const existinguser = await reservationSchema.findOne({
          customerEmail,
        });
        
        const existingphoneuser = await reservationSchema.findOne({
          customerPhone,
        });
        

        if (existinguser) {
          return res.status(400).json({ error: 'user details is already used for reservation.' });
        }
        else if(existingphoneuser)
        {
          return res.status(400).json({ error: 'user details is already used for reservation.' });
        }
        let newRegistration = new reservationSchema({
          tableNumber,
          capacity,
          reservationTime: reservationDateTime,
          customerName,
          customerEmail,
          customerPhone,
          additionalNotes,
          mealOption,
          reservationTime,
          reservationDate,
        });
    
        await newRegistration.save();
    
        // Compose and send the email
        const mailOptions = {
          from: "needresturant@gmail.com",
          to: customerEmail,
          subject: "Reservation Confirmation",
          text: `Dear ${customerName},
        
        We are thrilled to confirm your table reservation at NeeD Resturant. We appreciate your choice in selecting us for your dining experience. Below are the details of your reservation:
        
        Date: ${reservationDate}
        Time: ${reservationTime}
        Number of Guests: ${capacity}
        
        We have made a note of your preferences and will ensure that your table is prepared to offer you a delightful dining experience. Our team is eagerly awaiting your arrival and will be ready to provide you with exceptional service.
        
        Should there be any changes or if you need to modify your reservation, please do not hesitate to contact us. We will do our best to accommodate your request.
        
        Once again, thank you for choosing NeeD Resturant. We look forward to serving you and making your visit a memorable one. If you have any further questions or require any additional information, please feel free to reach out to us.
        
        Warm regards,
        
        Phanindra
        NeeD Resturant`,
        };
        
    
        await transporter.sendMail(mailOptions);
    
        res.status(200).send("Table Reserved Successfully");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
}


module.exports = booking;