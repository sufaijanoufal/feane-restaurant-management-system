const mongoose = require('mongoose');



const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Provide Name'],
        unique:true
    },
    slug:String,
    description:String,
    category:{
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true
 },
    images: [String],
    isAvailable:{
    type: Boolean,
    default: true
  },
    createdAt:
    {
    type: Date,
    default: Date.now
},
    price:{
        type:Number,
        required:[true,'please add a price']
    },
    isActive:{
        type:Boolean,
        default:true
    }
});



const Menu = mongoose.model('Menu',menuSchema);
module.exports = Menu;