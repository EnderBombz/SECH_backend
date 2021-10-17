const { EquipmentRequest } = require("../schema/schemas")
const { Werehouse } = require("../schema/schemas")
const { User } = require("../schema/schemas")

exports.getAll = async(req, res) => {
    try {
        const equipmentRequest = await EquipmentRequest.find({});
        //console.log(equipmentRequest)
        res.send(equipmentRequest);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const equipmentRequest = await EquipmentRequest.findOne({ _id: query });
        // console.log(equipmentRequest)
        res.send(equipmentRequest);
    } catch (err) {
        throw err
    }
}
exports.getProfileRequests = async(req, res) => {
    try {
        let query = req.params.userId;
        const userRequests = await EquipmentRequest.find({ user_id: query });
        //console.log(userRequests);
        res.send(userRequests);
    } catch (err) {
        throw err
    }
}
exports.getHaveProfileRequest = async(req, res) => {
    try {
        let query = req.params.userId;
        const userRequests = await EquipmentRequest.find({ user_id: query });
        //console.log(userRequests)
        if (userRequests.length > 0) {
            let status = false
            userRequests.forEach(item => {
                if (item.request_status === "pending") {
                    status = true;
                }
            })
            res.send(status)
        } else {
            res.send(false)
        }
    } catch (err) {
        throw err
    }
}

exports.getAllEquipmentPendingRequest = async(req, res) => {
    try {
        const requestType = "equipment"
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
exports.getUserEquipmentPendingRequest = async(req, res) => {
    try {
        let query = req.params.userId;
        const requestType = "equipment"
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


exports.postEquipment = async(req, res) => {
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

        res.sendStatus(200);

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

        res.sendStatus(200);

    } catch (err) {
        throw err
    }

}
exports.putEquipment = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { equip_list, request_date, user_id, request_status, request_type } = req.body;
        const list = JSON.parse(equip_list);

        EquipmentRequest.updateOne({ _id: itemId }, {
            $set: {
                equip_list: list,
                request_date,
                user_id,
                request_status: request_status,
                request_type
            }
        }).then((response) => {
            if (response) {
                console.log({ message: `Success to update ${itemId}` })
            } else {
                console.log({ message: `Invalid update` })
            }

        })
    } catch (err) {
        throw err
    }

}
exports.putFinishEquipment = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { equip_list, request_date, user_id, request_status, request_type } = req.body;
        const list = JSON.parse(equip_list);

        EquipmentRequest.updateOne({ _id: itemId }, {
            $set: {
                equip_list: list,
                request_date,
                user_id,
                request_status: request_status,
                request_type
            }
        }).then((response) => {

            if (response) {
                console.log({ message: `Success to update ${itemId}` })

                User.updateOne({ _id: user_id }, {
                    $set: {
                        equipments: list,
                    }
                }).then((response) => {
                    if (response) {
                        console.log({ message: `Success to update ${user_id}` })

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
exports.putFinishEquipmentMaintance = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { equip_list, request_date, user_id, request_status, request_type } = req.body;
        const list = JSON.parse(equip_list);

        EquipmentRequest.updateOne({ _id: itemId }, {
            $set: {
                equip_list: list,
                request_date,
                user_id,
                request_status: request_status,
                request_type
            }
        }).then(async(response) => {

            if (response) {
                console.log({ message: `Success to update ${itemId}` })

                const user = await User.findOne({ _id: user_id })

                let i = 0
                let cont = 0
                let newList = []
                user.equipments.forEach((item, index) => {
                    for (i = 0; i < list.length; i++) {
                        if (item._id != list[i]._id) {
                            newList[cont] = item
                            cont++;
                        }
                    }
                })
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

exports.putFinishEquipmentDevolution = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { equip_list, request_date, user_id, request_status, request_type } = req.body;
        const list = JSON.parse(equip_list);

        EquipmentRequest.updateOne({ _id: itemId }, {
            $set: {
                equip_list: list,
                request_date,
                user_id,
                request_status: request_status,
                request_type
            }
        }).then(async(response) => {

            if (response) {
                console.log({ message: `Success to update ${itemId}` })

                const user = await User.findOne({ _id: user_id })

                let i = 0
                let cont = 0
                let newList = []
                user.equipments.forEach((item, index) => {
                    for (i = 0; i < list.length; i++) {
                        if (item._id != list[i]._id) {
                            newList[cont] = item
                            cont++;
                        }
                    }
                })
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


exports.putResponseEquipment = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { request_response, request_status } = req.body;

        EquipmentRequest.updateOne({ _id: itemId }, {
            $set: {
                request_response: request_response,
                request_status: request_status
            }
        }).then((response) => {

            if (response) {
                console.log({ message: `Success to update ${itemId}` })
            } else {
                console.log({ message: `Invalid update` })
            }

        })
    } catch (err) {
        throw err
    }

}


exports.deleteEquipment = async(req, res) => {

    try {
        const itemId = req.params.itemId
        EquipmentRequest.deleteOne({ _id: itemId }).then(() => {
            res.send({ status: 'Task Deleted!' })
        })


    } catch (err) {
        throw err
    }

}