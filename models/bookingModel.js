const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   
name:{
    type:String,
    required:true
 },
 phone:{
    type:String,
    required:true
 },
 email:String,

 persons: {
        type: Number,
        required: true
      },

 date: {
        type: String,
        required: true
      },
       status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },

   
});



const Booking = mongoose.model('Booking',bookingSchema);
module.exports = Booking;