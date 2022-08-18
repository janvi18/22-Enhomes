const express = require("express")
const mongoose = require("mongoose")

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const userController = require("./controller/userController")
const suggestionController = require("./controller/suggestionController")
const roleController = require("./controller/roleController")
const staffController = require("./controller/staffController")
const maintenanceController = require("./controller/maintenanceController")
const houseController = require("./controller/houseController")
const visitorController = require("./controller/visitorController")
const deliveryController = require("./controller/deliveryController")
const placeController = require("./controller/placeController")
const sessionController = require("./controller/sessionController")
const complaintController = require("./controller/complaintController")
const eventController = require("./controller/eventController")
const memberController = require("./controller/memberController")
const societyController = require("./controller/societyController")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Session Api
app.get("/session", sessionController.getAllUsers)
app.post("/signup", sessionController.signup)
app.post("/login", sessionController.login)

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

//event Api
app.post("/event", eventController.addEvent)
app.put("/event", eventController.updateEvent)
app.get("/event", eventController.getAllEvents)
app.delete("/event", eventController.deleteEvent)

//Complain Api
app.post("/complaint", complaintController.addcomplaint)
app.put("/complaint", complaintController.updatecomplaint)
app.get("/complaint", complaintController.getAllcomplaint)
app.delete("/complaint", complaintController.deletecomplaint)

//Member Api
app.post("/member", memberController.addMember)
app.put("/member", memberController.updateMember)
app.get("/member", memberController.getAllMembers)
app.delete("/member", memberController.deleteMember)

//society Api
app.post("/society", societyController.addSociety)
app.put("/society", societyController.updateSociety)
app.get("/society", societyController.getAllSociety)
app.delete("/society", societyController.deleteSociety)

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("Server Started 9999")
    }
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


//npm run swagger-autogen 

