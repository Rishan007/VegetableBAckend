const mongoose = require('mongoose')
const Food = mongoose.model('Vegetables',{


Name:{
    type:String,
    require:true
},
Price:{
    type:Number,
    require:true
},
Image:{
    type:String,
    default:"No-image"
},
Description:{
    type:String,
    default:"Fresh and Healthy"
}



})

module.exports = Food