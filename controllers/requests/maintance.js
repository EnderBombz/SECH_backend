const { EquipmentRequest } = require("../../schema/schemas")
const { Werehouse } = require("../../schema/schemas")
const { User } = require("../../schema/schemas")
const { NewList } = require("./NewList/newList")


exports.getAllMaintancePendingRequest = async(req, res) => {
    try {
        const requestType = "maintance"
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
exports.getUserMaintancePendingRequest = async(req, res) => {
    try {
        let query = req.params.userId;
        const requestType = "maintance"
        const userRequests = await EquipmentRequest.find({ user_id: query, request_type: requestType });
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

exports.postMaintance = async(req, res) => {
    try {
        console.log("postEquipment ---")
        const { equip_list, request_date, user_id, request_type, request_details } = req.body;
        const list = JSON.parse(equip_list);


        list.forEach(element => {
            element.equip_state = "reservado";
        })

        list.forEach(element => {
            Werehouse.updateOne({ _id: element._id }, {
                $set: {
                    equip_type: element.equip_type,
                    equip_details: element.equip_details,
                    equip_spec: element.equip_spec,
                    equip_state: element.equip_state,
                    equip_class: element.equip_class,
                    equip_name: element.equip_name
                }
            }).then((response) => {

                if (response) {
                    res.send({ message: `Success to update ${element._id}` })
                } else {
                    res.send({ message: `Invalid update` })
                }

            })
        });

        const item = new EquipmentRequest({
            equip_list: list,
            request_date,
            user_id,
            request_status: "pending",
            request_type: request_type,
            request_details: request_details
        })
        item.save()
    } catch (err) {
        throw err
    }

}


exports.putFinishEquipmentMaintance = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { equip_list, request_date, user_data, request_status, request_type } = req.body;
        const list = JSON.parse(equip_list);

        const user_id = user_data.user_id;

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
                console.log(newList)

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
                                    equip_state: "manutenção"
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