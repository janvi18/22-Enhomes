const mongoose = require("mongoose")

const SocietySchema = new mongoose.Schema({
    event_id:Number,
    house_id:Number,
    user_id:Number,
    eventdate:Date,
    eventEndDate:Date,
    eventDetails:String,
    rent:Number,
    isAvailable:String
})

module.exports = mongoose.model("event",SocietySchema)
