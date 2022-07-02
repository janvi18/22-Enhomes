const mongoose=require("mongoose")

const deliverySchema=new mongoose.Schema({
    couriertype:String,
    isAllowed:String,
    status:String
})

module.exports=mongoose.model("Delivery",deliverySchema)