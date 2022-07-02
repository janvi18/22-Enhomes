const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema({
    visitorName:String,
    arrivingTime:String,
    isAllowed:Boolean

})

module.exports = mongoose.model("Visitor", visitorSchema)