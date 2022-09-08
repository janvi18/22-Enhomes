const mongoose = require("mongoose")
const staffSchema = new mongoose.Schema({
    staffMemberName: String,
    type: String,
    entryTime: String,
    exitTime: String,
    contactNo: Number,
    address: String,
    isAllowed: String,
    agencyName: String,
    agencyContactNumber: Number
})

module.exports = mongoose.model('Staff', staffSchema)