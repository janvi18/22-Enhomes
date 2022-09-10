const complaintModel = require("../model/complaintModel")
const validator = require("validator")

module.exports.addcomplaint = function (req, res) {

    let user = req.body.user
    let house = req.body.house
    let date = req.body.date
    let complaint = req.body.complaint

    console.log(req.body)

    let complaintName = new complaintModel({

        "user": user,
        "house": house,
        "date": date,
        "complaint": complaint,
    })

    let isError = false;
    let err = [];

    if (date == undefined || validator.isDate(date) == false) {
        isError = true;
        err.push({
            "Date Error": "Enter Valid Date"
        })
    }
    if (complaint == undefined || complaint.trim().length == 0) {
        isError = true;
        err.push({
            "complaint Error": "Please Enter Valid complaint"
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
        complaintName.save(function (err, data) {
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
                    "msg": "Complain Added!!"
                })
            }
        })
    }
}

//getAllcomplaint
module.exports.getAllcomplaint = function (req, res) {
    complaintModel.find().populate("user").populate("house").exec(function (err, data) {
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
                "msg": "Complains Retrived!!"
            })
        }
    })
}


//update complaint
module.exports.updatecomplaint = function (req, res) {

    let complaintId = req.body.complaintId
    let date = req.body.date
    let complaint = req.body.complaint


    let isError = false;
    let err = [];

    if (complaintId != undefined) {
        if (complaintId == undefined || complaintId.trim().length == 0) {
            isError = true;
            err.push({
                "complainId Error": "Please Enter Valid complaintId"
            })
        }
    }


    if (complaint != undefined) {
        if (validator.isAlpha(complaint) == false || complaint.trim().length == 0) {
            isError = true;
            err.push({
                "Complaint Error": "Please Enter Valid Type"
            })
        }
    }

    if (date != undefined) {
        if (date == undefined || date.trim().length == 0) {
            isError = true;
            err.push({
                "date Error": "Please Enter Valid Information"
            })
        }
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
        complaintModel.updateOne({ _id: complaintId }, { date: date, complaint: complaint }, function (err, data) {
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
                    "msg": "Complaint Updated!!"
                })
            }
        })
    }
}

//delete complaint
module.exports.deletecomplaint = function (req, res) {
    let complaintId = req.body.complaintId
    complaintModel.deleteOne({ _id: complaintId }, function (err, data) {
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
                "msg": "Complaint Deleted!!"
            })
        }
    })
}