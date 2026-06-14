const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
   
    user:{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
 },
 items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      menu: {
        type: mongoose.Schema.ObjectId,
        ref: 'Menu'
      }
    }
  ],
 totalPrice:{
    type:Number,
    required:true
 },

  createdAt:
    {
    type: Date,
    default: Date.now
}
   
});



const Order = mongoose.model('Order',orderSchema);
module.exports = Order;