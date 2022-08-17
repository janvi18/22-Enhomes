const mongoose = require("mongoose")

const societySchema = new mongoose.Schema({
    societyId: String,
    societyName: String,
    address: String,
    city: String,
    noOfHouse: Number,
    pincode: Number,

})
module.exports = mongoose.model("society", societySchema)