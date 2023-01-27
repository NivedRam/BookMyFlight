const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/flightbook',{useNewUrlParser:true})

const User=mongoose.model("User",{
 userid:Number,
username:String,
password:Number
})

module.exports={
    User
}