const mongoose = require("mongoose")
const suggestionSchema = new mongoose.Schema({
    suggestionNo: Number,
    date: Date,
    memberName: String,
    suggestions: String,
    reason: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "house"
    },
})
module.exports = mongoose.model("suggestion", suggestionSchema)