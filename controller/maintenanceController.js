const MaintenanceModel = require("../Model/maintenanceModel")
const validator = require("validator")

//add Maintenance
module.exports.addMaintenance = function (req, res) {
    let house = req.body.house
    let creationDate = req.body.creationDate
    let month = req.body.month
    let maintenanceAmount = req.body.maintenanceAmount
    let maintenancePaid = req.body.maintenancePaid
    let paymentDate = req.body.paymentDate
    let lastDate = req.body.lastDate
    let penalty = req.body.penalty

    let isError = false;
    let err = [];

    let maintenance = new MaintenanceModel({
        "house": house,
        "creationDate": creationDate,
        "month": month,
        "maintenanceAmount": maintenanceAmount,
        "maintenancePaid": maintenancePaid,
        "paymentDate": paymentDate,
        "lastDate": lastDate,
        "penalty": penalty
    })

    if (creationDate == undefined || validator.isDate(creationDate) == false) {
        isError = true;
        err.push({
            "CreationDate Error": "Enter Valid Date"
        })
    }
    let mth = month.toLowerCase()
    if (mth == undefined || mth != "january" && mth != "february" && mth != "march" && mth != "april" && mth != "may" && mth != "june" && mth != "july" && mth != "august" && mth != "september" && mth != "october" && mth != "november" && mth != "december") {
        isError = true;
        err.push({
            "Month Error": "Enter Valid Month"
        })
    }
    if (maintenanceAmount == undefined || validator.isNumeric(maintenanceAmount) == false) {
        isError = true;
        err.push({
            "MaintenanceAmount Error": "Enter Valid Amount"
        })
    }
    if (maintenancePaid == undefined) {
        isError = true;
        err.push({
            "maintenancePaid Error": "Enter Valid information"
        })
    }
    if (maintenancePaid != "true" && maintenancePaid != "false") {
        isError = true;
        err.push({
            "maintenancePaid Error": "Enter Valid information"
        })
    }
    if (paymentDate == undefined || validator.isDate(paymentDate) == false) {
        isError = true;
        err.push({
            "PaymentDate Error": "Enter Valid Date"
        })
    }
    if (lastDate == undefined || validator.isDate(lastDate) == false) {
        isError = true;
        err.push({
            "LastDate Error": "Enter Valid Date"
        })
    }
    if (penalty == undefined || validator.isNumeric(penalty) == false) {
        isError = true;
        err.push({
            "Penalty Error": "Enter Valid Amount"
        })
    }



    if (isError) {
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong..."
        })
    }
    else {
        maintenance.save(function (err, data) {
            if (err) {
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went Wrong.."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "Maintenance Entry Added!!"
                })
            }
        })
    }

}



//update Maintenance
module.exports.updateMaintenance = function (req, res) {
    let maintenanceId = req.body.maintenanceId
    let creationDate = req.body.creationDate
    let month = req.body.month
    let maintenanceAmount = req.body.maintenanceAmount
    let maintenancePaid = req.body.maintenancePaid
    let paymentDate = req.body.paymentDate
    let lastDate = req.body.lastDate
    let penalty = req.body.penalty

    let isError = false;
    let err = [];


    if (creationDate != undefined) {
        if (validator.isDate(creationDate) == false) {
            isError = true;
            err.push({
                "CreationDate Error": "Enter Valid Date"
            })
        }
    }

    if (month != undefined) {
        let mth = month.toLowerCase()
        if (mth != "january" && mth != "february" && mth != "march" && mth != "april" && mth != "may" && mth != "june" && mth != "july" && mth != "august" && mth != "september" && mth != "october" && mth != "november" && mth != "december") {
            isError = true;
            err.push({
                "Month Error": "Enter Valid Month"
            })
        }
    }

    if (maintenanceAmount != undefined) {
        if (validator.isNumeric(maintenanceAmount) == false) {
            isError = true;
            err.push({
                "MaintenanceAmount Error": "Enter Valid Amount"
            })
        }
    }

    if (maintenancePaid != undefined) {
        if (maintenancePaid != "true" && maintenancePaid != "false") {
            isError = true;
            err.push({
                "maintenancePaid Error": "Enter Valid information"
            })
        }
    }

    if (paymentDate != undefined) {
        if (validator.isDate(paymentDate) == false) {
            isError = true;
            err.push({
                "PaymentDate Error": "Enter Valid Date"
            })
        }
    }

    if (lastDate != undefined) {
        if (validator.isDate(lastDate) == false) {
            isError = true;
            err.push({
                "LastDate Error": "Enter Valid Date"
            })
        }
    }

    if (penalty != undefined) {
        if (validator.isNumeric(penalty) == false) {
            isError = true;
            err.push({
                "Penalty Error": "Enter Valid Amount"
            })
        }
    }



    if (isError) {
        console.log(err)
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong..."
        })
    }
    else {
        MaintenanceModel.updateOne({ _id: maintenanceId }, {
            creationDate: creationDate, month: month,
            maintenanceAmount: maintenanceAmount, maintenancePaid: maintenancePaid, paymentDate: paymentDate,
            lastDate: lastDate, penalty: penalty
        }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went Wrong..."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "Maintenance Entry Updated!!"
                })
            }
        })
    }

}



//Delete Maintenance
module.exports.deleteMaintenance = function (req, res) {
    let maintenanceId = req.body.maintenanceId

    MaintenanceModel.deleteOne({ _id: maintenanceId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong..."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Maintenance Entry Deleted!!"
            })
        }
    })
}


//List Maintenance
module.exports.getAllMaintenance = function (req, res) {
    MaintenanceModel.find().populate("house").exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong..."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Maintenance Entries Retrived!!"
            })
        }
    })
}