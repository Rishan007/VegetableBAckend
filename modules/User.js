const mongoose = require('mongoose')


const User = mongoose.model('User',{

Name:{
    type:String
},


Email:{
    type:String
},

Username:{
    type:String
},
Password:{
    type:String
},
UserType:{
    type:String,
    default:"Customer"
}


})





module.exports= User

