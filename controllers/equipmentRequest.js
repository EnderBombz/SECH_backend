const { EquipmentRequest } = require("../schema/schemas")
const { Werehouse } = require("../schema/schemas")


exports.getAll = async(req, res) => {
    try {
        const equipmentRequest = await EquipmentRequest.find({});
        console.log(equipmentRequest)
        res.send(equipmentRequest);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const equipmentRequest = await EquipmentRequest.findOne({ _id: query });
        console.log(equipmentRequest)
        res.send(equipmentRequest);
    } catch (err) {
        throw err
    }
}
exports.postEquipment = async(req, res) => {
    try {
        const { equip_list, request_date, user_id } = req.body;
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
                    res.send({ message: `Success to update ${itemId}` })
                } else {
                    res.send({ message: `Invalid update` })
                }

            })
        });

        const item = new EquipmentRequest({
            equip_list: list,
            request_date,
            user_id
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
        const { equip_list, request_date, user_id } = req.body;

        EquipmentRequest.updateOne({ _id: itemId }, {
            $set: {
                equip_list,
                request_date,
                user_id
            }
        }).then((response) => {

            if (response) {
                res.send({ message: `Success to update ${itemId}` })
            } else {
                res.send({ message: `Invalid update` })
            }

        })
    } catch (err) {
        throw err
    }

}
exports.deleteEquipment = async(req, res) => {

    try {
        const itemId = req.params.itemId
        console.log(itemId)
        EquipmentRequest.deleteOne({ _id: itemId }).then(() => {
            res.send({ status: 'Task Deleted!' })
        })
    } catch (err) {
        throw err
    }

}