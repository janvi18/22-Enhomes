const mongoose = require("mongoose")

const nonMemberSchema = new mongoose.Schema({
    nonMemberName: String,
    arrivingTime: String,
    isVisited:String,
    pickup:String,
    status:String,
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "house"
    },

})

module.exports = mongoose.model("nonMember", nonMemberSchema)