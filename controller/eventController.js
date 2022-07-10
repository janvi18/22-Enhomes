//eventId
//HouseId
//userId
//eventdate
//eventenddate
//eventdetils
//rent
//isavailable


//add
const EventModule = require("../model/eventModel")

module.exports.Addevent = function (req, res) {

    let eventId = req.body.eventId
    let houseId = req.body.houseId
    let userId = req.body.userId
    let eventDate = req.body.eventDate
    let eventEndDate = req.body.eventEndDate
    let eventDetails = req.body.eventDetails
    let rent = req.body.rent
    let isAvailable = req.body.isAvailable

    let newevent = new EventModule({

        "eventId": eventId,
        "houseId": houseId,
        "userId": userId,
        "eventDate": eventDate,
        "eventEndDate": eventEndDate,
        "eventDetails": eventDetails,
        "rent": rent,
        "isAvailable": isAvailable
    })

    newevent.save(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                msg: "Event Information Emty",
                status: -1,
                data: err
            })
        }
        else {
            res.json({
                msg: "Event Added",
                status: 200,
                data: data
            })
        }
    })
}
//add

//getAllEvents
module.exports.getAllEvents = function (req, res) {
    EventModule.fing(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                msg: "null",
                status: -1,
                data: err
            })
        }
        else {
            res.json({
                msg: "This is all available events",
                status: 200,
                data: data
            })
        }
    })
}
//getAllEvent


//delete
module.exports.deleteEvent = function (req, res) {
    EventModule.deleteOne({ id_evenId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                msg: "Event not canceled",
                status: -1,
                data: err
            })
        }
        else {
            res.json({
                msg: "Event Cancle",
                status: 200,
                data: data
            })
        }
    })
}
//delete


//update
module.exports.updateEvent = function (req, res) {
    let eventId = req.body.eventId
    let houseId = req.body.houseId
    let userId = req.body.userId
    let eventDate = req.body.eventDate
    let eventEndDate = req.body.eventEndDate
    let eventDetails = req.body.eventDetails
    let rent = req.body.rent
    let isAvailable = req.body.isAvailable

    EventModule.updateOne(
        { eventId: "eventId" },
        { houseId: "houseId" },
        { userId: "userId" },
        { eventDate: "eventDate" },
        { eventEndDate: "eventEndDate" },
        { eventDetails: "eventDetails" },
        { rent: "rent" },
        { isAvailable: "isAvailable" },

        function (err, data) {

            if (err) {
                console.log(err)
                res.json({
                    msg: "Enter valid informations",
                    status: -1,
                    data: err
                })
            }
            else {
                res.json({
                    msg: "Event Added",
                    status: 200,
                    data: data
                })
            }
        }
    )
}
//update