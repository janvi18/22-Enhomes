const mongoose = require("mongoose")

const deliverySchema = new mongoose.Schema({
    couriertype: String,
    isAllowed: Boolean,
    status: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "House"
    },
})

module.exports = mongoose.model("Delivery", deliverySchema)