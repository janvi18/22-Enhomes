//SocietyName
//SocietyId
//Address
//City
//Pincode
//noOfHouse
//noOfBlocks
//EntryDate

//add
const Societymodule = require("../model/societyModel")

module.exports.addInformations = function (req, res) {
    let SocietyName = req.body.SocietyName
    let SocietyId = req.body.SocietyId
    let Address = req.body.Address
    let City = req.body.City
    let Pincode = req.body.Pincode
    let noOfHouse = req.body.noOfHouse
    let noOfBlocks = req.body.noOfBlocks
    let EntryDate = req.body.EntryDate

    let newSociety = new SocietyModule({
        SocietyName: "SocietyName",
        SocietyId: "SocietyId",
        Address: "Address",
        City: "City",
        Pincode: "Pincode",
        noOfHouse: "noOfHouse",
        noOfBlocks: "noOfBlocks",
        EntryDate: "EntryDate"
    })
    newSociety.save(function (err, data) {

        if (err) {
            console.log(err)
            res.json({
                msg: "Society information not valid",
                status: -1,
                data: "fill up all informations"
            })
        }
        else {
            res.json({
                msg: "Society information added",
                status: 200,
                data: data
            })
        }
    })

}//add

//update
module.exports.updateInformations = function (req, res) {


    let SocietyName = req.body.SocietyName
    let SocietyId = req.body.SocietyId
    let Address = req.body.Address
    let City = req.body.City
    let Pincode = req.body.Pincode
    let noOfHouse = req.body.noOfHouse
    let noOfBlocks = req.body.noOfBlocks
    let EntryDate = req.body.EntryDate


    newSociety.updateOne(
        { SocietyName: "SocietyName" },
        { SocietyId: "SocietyId" },
        { Address: "Address" },
        { City: "City" },
        { Pincode: "Pincode" },
        { noOfBlocks: "noOfBlocks" },
        { noOfHouse: "noOfHouse" },
        { EntryDate: "EntryDate" },

        function (err, data) {

            if (err) {
                console.log(err)
                res.json({
                    msg: "Society information not valid",
                    status: -1,
                    data: "fill up all informations"
                })
            }
            else {
                res.json({
                    msg: "Society information added",
                    status: 200,
                    data: data
                })
            }
        })

}//update


//delete
module.exports.deleteSociety = function (req, res) {
    Societymodule.deleteOne({ id_SocietyId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                msg: "Enter valid informations",
                status: -1,
            })
        }
        else {
            res.json({
                msg: "Information delete",
                status: -1,
                data: data

            })
        }

    })
}//delete

//getAllInformations
module.exports.getAllInformations = function (req, res) {
    Societymodule.find(function (err, data) {

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
                msg: "This is your all information",
                status: -1,
                data: data

            })
        }
    })

}//getAllInformations