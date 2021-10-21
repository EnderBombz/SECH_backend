const { EquipmentRequest } = require("../../schema/schemas")
const { Werehouse } = require("../../schema/schemas")
const { User } = require("../../schema/schemas")
const { NewList } = require("./NewList/newList")

exports.getAllDevolutionPendingRequest = async(req, res) => {
    try {
        const requestType = "devolution"
        const userRequests = await EquipmentRequest.find({ request_type: requestType });
        //console.log(userRequests)
        if (userRequests.length > 0) {
            res.send(userRequests)
        } else {
            res.send(userRequests);
        }
    } catch (err) {
        throw err
    }
}
exports.getUserDevolutionPendingRequest = async(req, res) => {
    try {
        let query = req.params.userId;
        const requestType = "devolution"
        const userRequests = await EquipmentRequest.find({ "user_data.user_id": query, request_type: requestType });
        console.log(userRequests)
        if (userRequests.length > 0) {
            res.send(userRequests)
        } else {
            res.send(userRequests);
        }
    } catch (err) {
        throw err
    }
}

exports.putFinishEquipmentDevolution = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { equip_list, request_date, user_data, request_status, request_type } = req.body;
        const list = JSON.parse(equip_list);
        console.log(user_data)

        const user_id = user_data.user_id

        EquipmentRequest.updateOne({ _id: itemId }, {
            $set: {
                equip_list: list,
                request_date,
                request_status: request_status,
                request_type
            }
        }).then(async(response) => {

            if (response) {
                console.log({ message: `Success to update ${itemId}` })

                const newList = await NewList(user_id, list)

                User.updateOne({ _id: user_id }, {
                    $set: {
                        equipments: newList,
                    }
                }).then((response) => {
                    if (response) {
                        console.log({ message: `Success to update ${user_id}` })

                        list.forEach(item => {
                            Werehouse.updateOne({ _id: item._id }, {
                                $set: {
                                    equip_state: "livre"
                                }
                            }).then((response) => {
                                if (response) {
                                    console.log({ message: `Success to update ${user_id}` })
                                } else {
                                    console.log({ message: `Invalid update` })
                                }
                            })
                        })
                    } else {
                        console.log({ message: `Invalid update` })
                    }
                })
            } else {
                console.log({ message: `Invalid update` })
            }

        })
    } catch (err) {
        throw err
    }

}