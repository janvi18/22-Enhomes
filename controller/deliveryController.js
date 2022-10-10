const deliveryModel = require("../model/deliveryModel")
const validator= require("validator")

//adddelivery

module.exports.adddelivery = function (req, res) {
    let user = req.body.user
    let house = req.body.house
    let couriertype = req.body.couriertype
    let status = req.body.status



    let delivery = new deliveryModel({
        "user":user,
        "house":house,
        "couriertype": couriertype,
        "status": status
    })

    let isError=false;
    let err=[];

    if(couriertype==undefined || validator.isAlpha(couriertype)==false || couriertype.trim().length==0)
    {
        isError=true;
        err.push({
            "Couriertype Error":"Please Enter Valid Type"
        })
    }
   
    if(status==undefined || validator.isAlpha(status)==false || status.trim().length==0)
    {
        isError=true;
        err.push({
            "Status Error":"Please Enter Valid Status"
        })
    }

    if(isError)
    {
        console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
    }
    else
    {
        delivery.save(function (err, data) {
            if (err) {
                console.log(err)
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went Wrong...."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "Delivery Added!!"
                })
            }
        })
    }
}

//getAlldeliverys
module.exports.getAlldeliverys = function (req, res) {
    deliveryModel.find().populate("user").populate("house").exec(function(err,data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Deliverys Retrived!!"
            })
        }
    })
}



//update delivery
module.exports.updatedelivery = function (req, res) {
    
    let deliveryId = req.body.deliveryId
    let couriertype = req.body.couriertype
    let status = req.body.status

    let isError=false;
    let err=[];


    if(couriertype != undefined)
    {
        if(validator.isAlpha(couriertype)==false || couriertype.trim().length==0)
        {
            isError=true;
            err.push({
                "Couriertype Error":"Please Enter Valid Type"
            })
        }
    }

   

    if(status != undefined)
    {
        if(status==undefined || validator.isAlpha(status)==false || status.trim().length==0)
        {
            isError=true;
            err.push({
                "Status Error":"Please Enter Valid Status"
            })
        }
    }


    if(isError)
    {
        console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
    }
    else
    {
        deliveryModel.updateOne({ _id: deliveryId }, { couriertype: couriertype,status: status}, function (err, data) {
            if (err) {
                console.log(err)
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went Wrong...."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "Delivery Updated!!"
                })
            }
        })
    }
}



//deletedelivery
module.exports.deletedelivery = function (req, res) {
    let deliveryId = req.body.deliveryId
    deliveryModel.deleteOne({ _id: deliveryId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Somethong went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Delivery Deleted!!"
            })
        }
    })
}