const mongoose = require("mongoose")

const SocietySchema = new mongoose.Schema({
SocietyName:String,
SocietyId:Number,
Address:String,
City:String,
Pincode:Number,
noOfHouse:Number,
noOfBlocks:Number,
EntryDate:Date
})

module.exports = mongoose.model("Society",SocietySchema)