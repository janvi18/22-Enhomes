const mongoose = require("mongoose")

const SocietySchema = new  mongoose.Schema({
    member_id:Number,
    houseid:Number,
    membername:String,
    dob:Number,
    age:Number,
    gender:String,
    contactno:Number
})

module.exports= mongoose.model ("member",SocietySchema)