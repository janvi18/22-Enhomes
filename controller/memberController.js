//member_id
//houseid
//membername
//dob
//age
//gender
//contactno.

//add
const MemberModule = require("../model/memberModel")

module.exports.addMember = function (req, res) {

    let member_id = req.body.member_id
    let house_id = req.body.house_id
    let memberName = req.body.memberName
    let DOB = req.body.DOB
    let age = req.body.age
    let gender = req.body.gender
    let contactNo = req.body.contactNo

    let newmember = new MemberModule({
        "member_id": member_id,
        "house_id": house_id,
        "memberName": memberName,
        "dob": DOB,
        "age": age,
        "gender": gender,
        "contactno": contactNo,
    })
    newmember.save(function (error, data) {

        if (error) {
            console.log(error)
            res.json({
                msg: "unvalid information",
                status: -1,
                data: "fill informations"
            })
        }
        else {
            res.json({
                msg: " New Member added",
                status: 200,
                data: data
            })
        }
    })
}//add


//getAllMember
module.exports.getAllMembers = function (req, res) {
    MemberModule.find(function (error, data) {
        if (error) {
            console.log(error)
            res.json({
                msg: "unvalid information",
                status: -1,
                data: "fill informations"
            })
        }
        else {
            res.json({
                msg: "All Member List",
                status: 200,
                data: data
            })
        }
    })
}
//allmembers

//deleteMember
module.exports.deleteMember = function (req, res) {

    MemberModule.deleteOne({ id_member_id }, function (err, data) {
        if (error) {
            console.log(error)
            res.json({
                msg: "Member not deleted",
                status: -1,
                data: id_member_id
            })
        }
        else {
            res.json({
                msg: "Member Removed",
                status: 200,
                data: data
            })
        }
    })
}//delete

//update
module.exports.updateMember = function (req, res) {
    let member_id = req.body.member_id
    let house_id = req.body.house_id
    let memberName = req.body.memberName
    let DOB = req.body.DOB
    let age = req.body.age
    let gender = req.body.gender
    let contactNo = req.body.contactNo

    MemberModule.updateOne(
        { member_id: "member_id" },
        { house_id: "house_id" },
        { memberName: "memberName" },
        { dob: "DOB" },
        { age: "age" },
        { gender: "gender" },
        { contactno: "contactNo" },
        function (err, data) {

            if (error) {
                console.log(error)
                res.json({
                    msg: "Incomplete Informations",
                    status: -1,
                    data: data
                })
            }
            else {
                res.json({
                    msg: "Member updated",
                    status: 200,
                    data: data
                })
            }
        }
    )
}//update