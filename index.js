const express = require("express")
const mongoose = require("mongoose")
const userController = require("./Controller/userController")
const suggestionController = require("./Controller/suggestionController")
const roleController = require("./Controller/roleController")
const staffController = require("./Controller/staffController")
const maintenanceController = require("./Controller/maintenanceController")
const houseController = require("./controller/houseController")
const visitorController = require("./controller/visitorController")
const deliveryController = require("./controller/deliveryController")
const placeController = require("./controller/placeController")


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//User Api
app.get("/user", userController.getAllUsers)
app.post("/user", userController.addUser)
app.put("/user", userController.updateUser)
app.delete("/user", userController.deleteUser)

//Suggestion Api
app.get("/suggestion", suggestionController.getAllSuggestions)
app.post("/suggestion", suggestionController.addSuggestion)
app.put("/suggestion", suggestionController.updateSuggestion)
app.delete("/suggestion", suggestionController.deleteSuggestion)

//Role Api
app.get("/role", roleController.getAllRoles)
app.post("/role", roleController.addRole)
app.put("/role", roleController.updateRole)
app.delete("/role", roleController.deleteRole)

//Staff Api
app.get("/staff", staffController.getAllStaff)
app.post("/staff", staffController.addStaff)
app.put("/staff", staffController.updateStaff)
app.delete("/staff", staffController.deleteStaff)

//Maintenance Api
app.get("/maintenance", maintenanceController.getAllMaintenance)
app.post("/maintenance", maintenanceController.addMaintenance)
app.put("/maintenance", maintenanceController.updateMaintenance)
app.delete("/maintenance", maintenanceController.deleteMaintenance)

//House Api
app.get("/house", houseController.getAllHouses)
app.post("/house", houseController.addHouse)
app.put("/house", houseController.updateHouse)
app.delete("/house", houseController.deletehouse)

//Visitor Api
app.get("/visitor", visitorController.getAllvisitors)
app.post("/visitor", visitorController.addvisitor)
app.put("/visitor", visitorController.updatevisitor)
app.delete("/visitor", visitorController.deletevisitor)

//Delivery Api
app.get("/delivery", deliveryController.getAlldeliverys)
app.post("/delivery", deliveryController.adddelivery)
app.put("/delivery", deliveryController.updatedelivery)
app.delete("/delivery", deliveryController.deletedelivery)

//Place Api
app.get("/place", placeController.getAllPlaces)
app.post("/place", placeController.addPlace)
app.put("/place", placeController.updatePlace)
app.delete("/place", placeController.deletePlace)

const localDb = "mongodb://localhost/e-society-22"; 
const liveDb = "mongodb+srv://janvi123:enhomes@cluster0.l3iat.mongodb.net/enhomes?retryWrites=true&w=majority";

mongoose.connect(liveDb, function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("db Connected")
    }
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("Server Started 9999")
    }
})