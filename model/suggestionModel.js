const mongoose = require("mongoose")
const suggestionSchema = new mongoose.Schema({
    memberName: String,
    date: String,
    suggestions: String,
    reason: String,
    acknowledgement: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "House"
    },
})
module.exports = mongoose.model("suggestion", suggestionSchema)