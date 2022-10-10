const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema({
    visitorName: String,
    arrivingTime: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "house"
    },

})

module.exports = mongoose.model("Visitor", visitorSchema)