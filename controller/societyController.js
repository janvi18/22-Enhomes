const societyModel = require("../model/societyModel")
const validator = require("validator")

//addSociety
module.exports.addSociety = function(req,res){
//let societyId = req.body.societyId
let societyName = req.body.societyName
let address = req.body.address
let city = req.body.city
let pincode = req.body.pincode
let noOfHouse = req.body.noOfHouse


let society = new societyModel({

    
    "societyName":societyName,
    "address":address,
    "city":city,
    "pincode":pincode,
    "noOfHouse":noOfHouse

})

let isError = false;
let err = [];


if (societyName == undefined || validator.isAlpha(societyName) == false || societyName.trim().length == 0){
    isError = true;
    err.push({
        "societyName error":"Please enter societyName"
    })
}
if (address == undefined || validator.isAlpha(address) == false || address.trim().length == 0){
    isError = true;
    err.push({
        "address error":"Please enter address"
    })
}
if (city == undefined || validator.isAlpha(city) == false || city.trim().length == 0){
    isError = true;
    err.push({
        "city error":"Please enter city"
    })
}
if (pincode == undefined || validator.isNumeric(pincode.toString()) == false || pincode.length != 6) {
    isError = true;
    err.push({
        "pincode Error": "Please Enter Valid pincode"
    })
}
if (noOfHouse == undefined || validator.isNumeric(noOfHouse.toString()) == false || noOfHouse.length != 4) {
    isError = true;
    err.push({
        "noOfHouse Error": "Please Enter Valid noOfHouse"
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
    society.save(function (err, data) {
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
                "msg": "society Added!!"
            })
        }
    })
}
}
//addSociety




//updateSociety
module.exports.updateSociety = function (req, res) {
    let societyId = req.body.societyId
    let societyName = req.body.societyName
    let address = req.body.address
    let city = req.body.city
    let noOfHouse = req.body.noOfHouse
    let pincode = req.body.pincode
    
    let isError = false;
    let err = [];

    

    if (societyName != undefined) {
        if (validator.isAlpha(societyName) == false) {
            isError = true;
            err.push({
                "ocietyName Error": "Enter Valid Name"
            })
        }
    }

    if(noOfHouse != undefined)
    {
        if ( validator.isNumeric(noOfHouse.toString()) == false || noOfHouse.length == 0) {
            isError = true;
            err.push({
                "noOfHouse Error": "Please Enter Valid noOfHouse"
            })
        }
    }

    if (address != undefined) {
        if (validator.isAlpha(address) == false) {
            isError = true;
            err.push({
                "Address Error": "Please Enter Valid Address"
            })
        }
    }

    if (city != undefined) {
        if (validator.isAlpha(city) == false) {
            isError = true;
            err.push({
                "City Error": "Please Enter Valid City"
            })
        }
    }

    if (pincode != undefined) {
        if (validator.isNumeric(pincode.toString()) == false || pincode.length != 6) {
            isError = true;
            err.push({
                "pincode Error": "Please Enter Valid pincode"
            })
        }
    }

    if (isError) {
        res.json({
            "status": -1,
            "data": err,
            "msg": "Something went Wrong...."
        })
    }
    else {
        societyModel.updateOne({ _id: societyId }, { "societyName":societyName, "address": address, "city": city, "pincode": pincode,"noOfHouse":noOfHouse }, function (err, data) {
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
                    "msg": "society Information Updated!!"
                })
            }
        })
    }
}//update


//deleteSociety
module.exports.deleteSociety = function (req, res) {
    let societyId = req.body.societyId

    societyModel.deleteOne({ _id: societyId }, function (err, data) {
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
                "msg": "Society Information Deleted!!"
            })
        }
    })
}//delete


//list

module.exports.getAllSociety = function (req, res) {
    societyModel.find(function (err, data) {
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
                "msg": "society Retrived!!"
            })
        }
    })
}