const mongoose=require("mongoose")

const deliverySchema=new mongoose.Schema({
    couriertype:String,
    isAllowed:String,
    status:String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "house"
    },
})

module.exports=mongoose.model("Delivery",deliverySchema)