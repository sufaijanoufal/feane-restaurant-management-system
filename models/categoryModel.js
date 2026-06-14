const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Provide Category'],
        unique:true
    },
    slug:String,
    
    isActive:{
        type:Boolean,
        default:true
    }
 
});



const Category = mongoose.model('Category',categorySchema);
module.exports = Category;
