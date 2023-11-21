const mongoose = require('mongoose');

let reservationSchema = new mongoose.Schema({
  tableNumber: {
    type: String,
    required: true,
  },
  reservationDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: function() {
      return new Date(this.reservationDate.getTime() + 60 * 60 * 24 * 1000); // TTL index set to 24 hours
    },
  },
  capacity: {
    type: String,
    required: true,
  },
  mealOption: {
    type: String,
    required: true,
  },
  reservationTime: {
    type: String,
    required: true,
  },
 
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    required: true,
  },
  additionalNotes: {
    type: String,
  },
 
});

module.exports = mongoose.model('reservationSchema', reservationSchema);
