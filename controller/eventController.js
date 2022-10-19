const eventModel = require("../model/eventModel")
const validator = require("validator")

module.exports.addEvent = function (req, res) {

    let user = req.body.user
    let house = req.body.house
    let place = req.body.place
    let eventDate = req.body.eventDate
    let eventEndDate = req.body.eventEndDate
    let eventDetails = req.body.eventDetails
    let rent = req.body.rent

    let event = new eventModel({
        "user": user,
        "house": house,
        "place": place,
        "eventDate": eventDate,
        "eventEndDate": eventEndDate,
        "eventDetails": eventDetails,
        "rent": rent,
    })

    let isError = false;
    let err = [];

    if (eventDate == undefined || validator.isDate(eventDate) == false) {
        isError = true;
        err.push({
            "eventDate Error": "Enter Valid Date"
        })
    }
    if (eventEndDate == undefined || validator.isDate(eventEndDate) == false) {
        isError = true;
        err.push({
            "eventEndDate Error": "Please Enter Valid Date"
        })
    }

    if (eventDetails == undefined || validator.isAlpha(eventDetails) == false || eventDetails.trim().length == 0) {
        isError = true;
        err.push({
            "eventDetails Error": "Please Enter Valid Details"
        })
    }
    if (rent == undefined || validator.isNumeric(rent.toString()) == false || rent.trim().length == 0) {
        isError = true;
        err.push({
            "Rent Error": "Please Enter Valid Rent Amount"
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
        event.save(function (err, data) {
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
                    "msg": "Event Added!!"
                })
            }
        })
    }
}

//getAllevent
module.exports.getAllEvents = function (req, res) {
    eventModel.find().populate("user").populate("house").populate("place").exec(function (err, data) {
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
                "msg": "Events Retrived!!"
            })
        }
    })
}

//update event
module.exports.updateEvent = function (req, res) {

    let eventId = req.body.eventId
    let eventDate = req.body.eventDate
    let eventEndDate = req.body.eventEndDate
    let eventDetails = req.body.eventDetails
    let rent = req.body.rent

    let isError = false;
    let err = [];
    if (eventDate != undefined) {
        if (eventDate == undefined || validator.isDate(eventDate) == false) {
            isError = true;
            err.push({
                "Date Error": "Enter Valid Date"
            })
        }
    }
    if (eventEndDate != undefined) {
        if (eventEndDate == undefined || validator.isDate(eventEndDate) == false) {
            isError = true;
            err.push({
                "End Date Error": "Enter Valid End Date"
            })
        }
    }
    if (eventDetails != undefined) {
        if (validator.isAlpha(eventDetails) == false || eventDetails.trim().length == 0) {
            isError = true;
            err.push({
                "Event Detail Error": "Please Enter Valid information"
            })
        }
    }

    if (rent != undefined) {
        if (rent == undefined || rent.trim().length == 0) {
            isError = true;
            err.push({
                "Rent error": "Enter Valid Amount"
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

        eventModel.updateOne({ _id: eventId }, { eventDate: eventDate, eventEndDate: eventEndDate, eventDetails: eventDetails, rent: rent }, function (err, data) {
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
                    "msg": "event Updated!!"
                })
            }
        })
    }
}
//deleteevent
module.exports.deleteEvent = function (req, res) {
    let eventId = req.params.eventId
    eventModel.deleteOne({ _id: eventId }, function (err, data) {
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
                "msg": " Deleted!!"
            })
        }
    })
}