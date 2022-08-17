const mongoose = require("mongoose")

const ComplaintSchema = new mongoose.Schema({

    complainId: Number,
    userId: Number,
    date: String,
    complaint: String,
    isResolved: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "House"
    }
})

module.exports = mongoose.model("Complaint", ComplaintSchema)