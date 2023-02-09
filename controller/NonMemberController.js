const visitorModel = require("../model/visitorModel")
const validator = require("validator")
//addvisitor

module.exports.addvisitor = function (req, res) {
    let house = req.body.house
    let visitorName = req.body.visitorName
    let arrivingTime = req.body.arrivingTime
    let isVisited = req.body.isVisited
    let pickup = req.body.pickup
    let status = req.body.status


    let visitor = new visitorModel({
        "house": house,
        "visitorName": visitorName,
        "arrivingTime": arrivingTime,
        "isVisited": isVisited,
        "pickup": pickup,
        "status": status

    })

    let isError = false;
    let err = [];

    if (visitorName == undefined || validator.isAlpha(visitorName) == false || visitorName.trim().length == 0) {
        isError = true;
        err.push({
            "VisitorName Error": "Please Enter Valid Name"
        })
    }
    if (arrivingTime == undefined || validator.isNumeric(arrivingTime.toString()) == false) {
        isError = true;
        err.push({
            "ArrivingTime Error": "Please Enter Valid Time"
        })
    }
    if (isVisited == undefined || validator.isAlpha(isVisited) == false || isVisited.trim().length == 0) {
        isError = true;
        err.push({
            "isVisited Error": "Please Enter Valid Info.."
        })
    }
    if (pickup == undefined || validator.isAlpha(pickup) == false || pickup.trim().length == 0) {
        isError = true;
        err.push({
            "pickup Error": "Please Enter Valid Info.."
        })
    }
    if (status == undefined || validator.isAlpha(status) == false || status.trim().length == 0) {
        isError = true;
        err.push({
            "status Error": "Please Enter Valid Info.."
        })
    }



    if (isError) {
        console.log(err)
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong...."
        })
    }
    else {
        visitor.save(function (err, data) {
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
                    "msg": "Visitor Added!!"
                })
            }
        })
    }
}

//getAllvisitors
module.exports.getAllvisitors = function (req, res) {
    visitorModel.find().populate("house").exec(function (err, data) {
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
                "msg": "Visitors Retrived!!"
            })
        }
    })
}



//update visitor
module.exports.updatevisitor = function (req, res) {
    let visitorId = req.body.visitorId
    let visitorName = req.body.visitorName
    let arrivingTime = req.body.arrivingTime
    let isVisited = req.body.isVisited
    let pickup = req.body.pickup
    let status = req.body.status

    let isError = false;
    let err = [];


    if (visitorName != undefined) {
        if (validator.isAlpha(visitorName) == false || visitorName.trim().length == 0) {
            isError = true;
            err.push({
                "VisitorName Error": "Please Enter Valid Name"
            })
        }
    }

    if (arrivingTime != undefined) {
        if (validator.isNumeric(arrivingTime.toString()) == false) {
            isError = true;
            err.push({
                "ArrivingTime Error": "Please Enter Valid Time"
            })
        }
    }
    if (isVisited == undefined || validator.isAlpha(isVisited) == false || isVisited.trim().length == 0) {
        isError = true;
        err.push({
            "isVisited Error": "Please Enter Valid Info.."
        })
    }
    if (pickup == undefined || validator.isAlpha(pickup) == false || pickup.trim().length == 0) {
        isError = true;
        err.push({
            "pickup Error": "Please Enter Valid Info.."
        })
    }
    if (status == undefined || validator.isAlpha(status) == false || status.trim().length == 0) {
        isError = true;
        err.push({
            "status Error": "Please Enter Valid Info.."
        })
    }

    if (isError) {
        console.log(err)
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong...."
        })
    }
    else {
        visitorModel.updateOne({ _id: visitorId }, { visitorName: visitorName, arrivingTime: arrivingTime, isVisited: isVisited, pickup: pickup, status: status }, function (err, data) {
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
                    "msg": "Visitor Updated!!"
                })
            }
        })
    }
}



//deletevisitor
module.exports.deletevisitor = function (req, res) {
    let visitorId = req.params.visitorId
    visitorModel.deleteOne({ _id: visitorId }, function (err, data) {
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
                "msg": "Visitor Deleted!!"
            })
        }
    })
}