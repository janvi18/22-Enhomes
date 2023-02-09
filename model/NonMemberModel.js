const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema({
    visitorName: String,
    arrivingTime: String,
    isVisited:String,
    pickup:String,
    status:String,
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "house"
    },

})

module.exports = mongoose.model("Visitor", visitorSchema)