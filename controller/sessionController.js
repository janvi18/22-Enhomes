const validator = require("validator")
const sessionModel = require("../model/sessionModel")

module.exports.signup = function (req, res) {
    let userName = req.body.userName
    let email = req.body.email
    let password = req.body.password

    let session = new sessionModel({
        "userName": userName,
        "email": email,
        "password": password
    })

    //validaton
    let isError = false
    let errorMsg = []

    if (userName == undefined || userName.trim().length == 0) {
        isError = true
        errorMsg.push({
            "UsernameError": "Please Enter UserName"
        })
    }
    if (email == undefined || email.trim().length == 0) {
        isError = true
        errorMsg.push({
            "EmailError": "Please Enter Email"
        })
    }
    if (password == undefined || password.trim().length == 0) {
        isError = true
        errorMsg.push({
            "PasswordError": "Please Enter Password"
        })
    }
    if (isError == true) {
        res.json({
            "status": -1,
            "data": errorMsg,
            "msg": "Please Solve Error"
        })
    }
    else {

        information.save(function (err, data) {
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
                    "msg": "SignUp Successfull!!"
                })
            }
        })
    }
}

module.exports.login = function (req, res) {

    let email = req.body.email
    let password = req.body.password

    let errorMsg = []
    let isError = false
    let isCorrect = false
    let user = undefined

    //validation
    if (email == undefined || email.trim().length == 0 || validator.isEmail(email) == false) {
        isError = true
        errorMsg.push({
            "EmailError": "Please Enter Email"
        })
    }
    if (password == undefined || password.trim().length == 0) {
        isError = true
        errorMsg.push({
            "PasswordError": "Please Enter Password"
        })
    }

    if (isError == true) {
        res.json({
            "Status": -1,
            "data": errorMsg,
            "msg": "Please Solve Error"
        })
    }


    sessionModel.find({ $and: [{ "email": email }, { "password": password }] }, function (err, data) {
        if (err) {
            res.json({
                "status": -1,
                "data": req.body,
                "msg": "Invalid Credentials"

            })

        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Login Done Successfully"

            })
        }
    })
}
// error

module.exports.getAllUsers = function (req, res) {
    sessionModel.find(function (err, data) {
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
                "msg": "Information Retrived!!"
            })
        }
    })
}