const suggestionModel = require("../model/suggestionModel")
const validator = require("validator")

// add suggestion
module.exports.addSuggestion = function (req, res) {
    let user = req.body.user
    let house = req.body.house
    let memberName = req.body.memberName
    let date = req.body.date
    let suggestions = req.body.suggestions
    let reason = req.body.reason
    let acknowledgement = req.body.acknowledgement


    let suggestion = new suggestionModel({
        "user": user,
        "house": house,
        "date": date,
        "memberName": memberName,
        "suggestions": suggestions,
        "reason": reason,
        "acknowledgement": acknowledgement
    })

    let isError = false;
    let err = [];

    if (memberName == undefined || validator.isAlpha(memberName) == false || memberName.trim().length == 0) {
        isError = true;
        err.push({
            "MemberName Error": "Please Enter Valid Name"
        })
    }
    if (date == undefined || validator.isDate(date) == false) {
        isError = true;
        err.push({
            "Date Error": "Enter Valid Date"
        })
    }
    if (suggestions == undefined || validator.isAlphanumeric(suggestions) == false || suggestions.trim().length == 0) {
        isError = true;
        err.push({
            "Suggestion Error": "Please Enter Valid Information"
        })
    }
    if (reason == undefined || validator.isAlphanumeric(reason) == false || reason.trim().length == 0) {
        isError = true;
        err.push({
            "Reason Error": "Please Enter Valid Information"
        })
    }
    if (acknowledgement == undefined || validator.isAlphanumeric(acknowledgement) == false || acknowledgement.trim().length == 0) {
        isError = true;
        err.push({
            "Acknowledgement Error": "Please Enter Valid Information"
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
        suggestion.save(function (err, data) {
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
                    "msg": "Suggestion Added!!"
                })
            }
        })
    }
}

// Update Suggestion
module.exports.updateSuggestion = function (req, res) {

    let suggestionId = req.body.suggestionId
    let date = req.body.date
    let memberName = req.body.memberName
    let suggestions = req.body.suggestions
    let reason = req.body.reason
    let acknowledgement = req.body.acknowledgement


    let isError = false;
    let err = [];

    if (memberName != undefined) {
        if (validator.isAlpha(memberName) == false || memberName.trim().length == 0) {
            isError = true;
            err.push({
                "MemberName Error": "Please Enter Valid Name"
            })
        }
    }

    if (date != undefined) {
        if (validator.isDate(date) == false) {
            isError = true;
            err.push({
                "Date Error": "Enter Valid Date"
            })
        }
    }

    if (suggestions != undefined) {
        if (validator.isAlphanumeric(suggestions) == false || suggestions.trim().length == 0) {
            isError = true;
            err.push({
                "Suggestion Error": "Please Enter Valid Information"
            })
        }
    }

    if (reason != undefined) {
        if (validator.isAlphanumeric(reason) == false || reason.trim().length == 0) {
            isError = true;
            err.push({
                "Reason Error": "Please Enter Valid Information"
            })
        }
    }

    if (acknowledgement != undefined) {
        if (validator.isAlphanumeric(acknowledgement) == false || acknowledgement.trim().length == 0) {
            isError = true;
            err.push({
                "Acknowledgement Error": "Please Enter Valid Information"
            })
        }
    }


    if (isError) {
        console.log(err)
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went wrong...."
        })
    }
    else {
        suggestionModel.updateOne({ _id: suggestionId }, { date: date, memberName: memberName, suggestions: suggestions, reason: reason, acknowledgement: acknowledgement }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({
                    "status": -1,
                    "data": err,
                    "msg": "Something went wrong...."
                })
            }
            else {
                res.json({
                    "status": 200,
                    "data": data,
                    "msg": "Information Updated!!"
                })
            }
        })
    }

}

//Delete Suggestion
module.exports.deleteSuggestion = function (req, res) {
    let suggestionId = req.params.suggestionId

    suggestionModel.deleteOne({ _id: suggestionId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Suggestion Deleted!!"
            })
        }
    })
}

//List Suggestion
module.exports.getAllSuggestions = function (req, res) {
    suggestionModel.find().populate("user").populate("house").exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Suggestions Retrived!!"
            })
        }
    })
}