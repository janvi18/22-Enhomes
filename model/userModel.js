const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    flatNo: String,
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    age: Number,
    gender: String,
    contactNo: Number,
    email: String,
    Occupation: String
})
module.exports = mongoose.model("User", userSchema)