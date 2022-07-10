//complainNo.
//date
//membername
//complain


//add
const ComplainModule = require("../model/complainModel")

module.exports.Addcomplains = function (req, res) {

    let ComplainNo = req.body.ComplainNo
    let ComplainDate = req.body.ComplainDate
    let MemberName = req.body.MemberName
    let Complain = req.body.Complain

    let newcomplain = new ComplainModule({
        "ComplainNo": ComplainNo, "ComplainDate": ComplainDate, "MemberName": MemberName, "Complain": Complain
    })

    newcomplain.save(function (error, data) {

        if (error) {
            console.log(error)
            res.json({
                msg: "unvalid informations",
                status: -1,
                data: "fill all requirments"
            })
        }
        else {
            res.json({
                msg: "complain granted",
                status: 200,
                data: data
            })
        }
    })
}//add

//getAllComplains
module.exports.getAllComplains = function (req, res) {
    ComplainModule.find(function (err, data) {
        console.log(error)
        if (err) {
            res.json({
                msg: "none",
                status: -1,
            })
        }
        else {
            res.json({
                msg: "All complains",
                status: 200,
                data: data
            })
        }
    })
}//getAllComplains

//deletComplains
module.exports.deleteComplain = function (req, res) {

    ComplainModule.deleteOne({ id_ComplainId }, function (error, data) {

        if (err) {
            console.log(err)
            res.json({
                msg: "complain not deleted",
                status: -1,
                data: id_ComplainId
            })
        }
        else {
            res.json({
                msg: "complain remove",
                status: 200,
                data: data
            })
        }
    })
}//delete complains

//update
module.exports.updateComplain = function (req, res) {
    let ComplainNo = req.body.ComplainNo
    let ComplainDate = req.body.ComplainDate
    let MemberName = req.body.MemberName
    let complain = req.body.Complain

    ComplainModule.updateOne(
        { ComplainNo: "ComplainNo" },
        { ComplainDate: "ComplainDate" },
        { MemberName: "MemberName" },
        { Complain: "Complain" },
        function (err, data) {

            if (err) {
                console.log(err)
                res.json({
                    msg: "complain denied",
                    status: -1,
                    //data:data
                })
            }
            else {
                res.json({
                    msg: "Complain updated",
                    status: 200,
                    data: data
                })
            }
        }
    )
}
//update