const mongoose = require("mongoose")

const SocietySchema = new mongoose.Schema({
    complainNo:Number,
    date:Date,
    membername:String,
    complain:String
})

module.exports = mongoose.model("Complain",SocietySchema)