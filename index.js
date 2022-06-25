const express = require("express")
const mongoose = require("mongoose")
const userController = require("./Controller/userController")
const suggestionController = require("./controller/suggestionController")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/user", userController.getAllUsers)
app.post("/user", userController.addUser)
app.put("/user", userController.updateUser)
app.delete("/user", userController.deleteUser)

app.get("/suggestion",suggestionController.getAllSuggestions)
app.post("/suggestion",suggestionController.addSuggestion)
app.put("/suggestion",suggestionController.updateSuggestion)
app.delete("/suggestion",suggestionController.deleteSuggestion)


mongoose.connect("mongodb://localhost/amazon2022", function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("db Connected")
    }
})


app.listen(9000, function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("Server Started 9000")
    }
})