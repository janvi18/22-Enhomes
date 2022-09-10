const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    eventDate: String,
    eventEndDate: String,
    eventDetails: String,
    rent: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "House"
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place"
    }

})
module.exports = mongoose.model("event", eventSchema)