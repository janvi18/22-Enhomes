const feedbackModel = require("../model/feedbackModel")
const validator = require("validator")

module.exports.addfeedback = function (req, res) {

    let house = req.body.house
    let date = req.body.date
    let feedback = req.body.feedback
    let acknowledgement = req.body.acknowledgement

    console.log(req.body)

    let feedbackName = new feedbackModel({

        "house": house,
        "date": date,
        "feedback": feedback,
        "acknowledgement": acknowledgement
    })

    let isError = false;
    let err = [];

    if (date == undefined || validator.isDate(date) == false) {
        isError = true;
        err.push({
            "Date Error": "Enter Valid Date"
        })
    }
    if (feedback == undefined || feedback.trim().length == 0) {
        isError = true;
        err.push({
            "feedback Error": "Please Enter Valid feedback"
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
        feedbackName.save(function (err, data) {
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
                    "msg": "feedback Added!!"
                })
            }
        })
    }
}

//get all feedback
module.exports.getAllfeedback = function (req, res) {
    feedbackModel.find().populate("house").exec(function (err, data) {
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
                "msg": "feedback Retrived!!"
            })
        }
    })
}


//update feedback
module.exports.updatefeedback = function (req, res) {

    let feedbackId = req.body.feedbackId
    let date = req.body.date
    let feedback = req.body.feedback


    let isError = false;
    let err = [];

    if (feedbackId != undefined) {
        if (feedbackId == undefined || feedbackId.trim().length == 0) {
            isError = true;
            err.push({
                "feedbackId Error": "Please Enter Valid feedbackId"
            })
        }
    }


    if (feedback != undefined) {
        if (validator.isAlpha(feedback) == false || feedback.trim().length == 0) {
            isError = true;
            err.push({
                "feedback Error": "Please Enter Valid Type"
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
        feedbackModel.updateOne({ _id: feedbackId }, { date: date, feedback: feedback }, function (err, data) {
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
                    "msg": "feedback Updated!!"
                })
            }
        })
    }
}

//delete feedback
module.exports.deletefeedback = function (req, res) {
    let feedbackId = req.params.feedbackId
    feedbackModel.deleteOne({ _id: feedbackId }, function (err, data) {
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
                "msg": "feedback Deleted!!"
            })
        }
    })
}