const mongoose = require("mongoose")

const memberSchema = new mongoose.Schema({
    memberName: String,
    dateOfBirth: String,
    age: Number,
    gender: String,
    contactNo: Number,
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "House"
    }

})
module.exports = mongoose.model("member", memberSchema)