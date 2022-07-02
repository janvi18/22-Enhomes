const deliveryModel = require("../model/deliveryModel")

//adddelivery

module.exports.adddelivery = function (req, res) {
    let couriertype = req.body.couriertype;
    isAllowed = req.body.isAllowed,
        status = req.body.status



    let delivery = new deliveryModel({
        "couriertype": couriertype,
        "isAllowed": isAllowed,
        "status": status
    })

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

//getAlldeliverys
module.exports.getAlldeliverys = function (req, res) {
    deliveryModel.find(function (err, data) {
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
    let isAllowed = req.body.isAllowed
    let status = req.body.status

    deliveryModel.updateOne({ _id: deliveryId }, { couriertype: couriertype }, { isAllowed: isAllowed }, { status: status }, function (err, data) {
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
