const mongoose = require('mongoose')
const Food = mongoose.model('Vegetables',{


Name:{
    type:String,
    require:true
},
Description:{
    type:String
},


Price:{
    type:Number,
    require:true
},
Image:{
    type:String,
    default:"No-image"
},
Rating:{
    type:Number,
    default:1
}



})

module.exports = Food