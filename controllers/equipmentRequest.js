const { EquipmentRequest } = require("../schema/schemas")


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
        const item = new EquipmentRequest({
            equip_list,
            request_date,
            user_id
        })
        item.save()
    } catch (err) {
        throw err
    }

}
exports.putEquipment = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { equip_list, request_date, user_id } = req.body;

        EquipmentRequest.updateOne({ id_request: itemId }, {
            $set: {
                equip_list,
                request_date,
                user_id
            }
        }).then((response) => {

            if (response) {
                res.send({ message: `Success to update ${userId}` })
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