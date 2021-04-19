const mongoose = require('mongoose');
const date = new Date().toLocaleDateString("en-US").split("/").toString()
const Booking = mongoose.model('Booking',{

User:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    require:true
},
Qty:{
    type:Number,
    default:1
},
Vegetables:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Vegetables'
},
Date:{
    type:String,
    default:date
}




});

module.exports =Booking