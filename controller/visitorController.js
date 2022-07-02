const visitorModel = require("../model/visitorModel")

//addvisitor

module.exports.addvisitor = function (req, res) {
    let visitorDetails = req.body.visitorDetails;

    let visitor = new visitorModel({
        "visitorDetails": visitorDetails
    })

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

//getAllvisitors
module.exports.getAllvisitors = function (req, res) {
    visitorModel.find(function (err, data) {
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
    let visitorDetails = req.body.visitorDetails

    visitorModel.updateOne({ _id: visitorId }, { visitorDetails: visitorDetails }, function (err, data) {
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



//deletevisitor
module.exports.deletevisitor = function (req, res) {
    let visitorId = req.body.visitorId
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
