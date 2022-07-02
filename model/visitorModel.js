const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema({
    visitorName:String,
    arrivingTime:Time,
    

})

module.exports = mongoose.model("Visitor", visitorSchema)