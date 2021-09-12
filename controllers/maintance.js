const { MaintanceRequest } = require("../schema/schemas")


exports.getAll = async(req, res) => {
    try {
        const maintanceRequest = await MaintanceRequest.find({});
        console.log(maintanceRequest)
        res.send(maintanceRequest);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const maintanceRequest = await MaintanceRequest.findOne({ _id: query });
        console.log(maintanceRequest)
        res.send(maintanceRequest);
    } catch (err) {
        throw err
    }
}
exports.postMaintance = async(req, res) => {
    try {
        const {
            user_id,
            equip_list,
            maintance_date,
            maintance_details
        } = req.body;

        const item = new MaintanceRequest({
            user_id,
            equip_list,
            maintance_date,
            maintance_details
        })
        item.save()
    } catch (err) {
        throw err
    }

}
exports.putMaintance = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const {
            user_id,
            equip_list,
            maintance_date,
            maintance_details
        } = req.body;

        MaintanceRequest.updateOne({ _id: itemId }, {
            $set: {
                user_id,
                equip_list,
                maintance_date,
                maintance_details
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
exports.deleteMaintance = async(req, res) => {
    try {
        const itemId = req.params.itemId
        MaintanceRequest.deleteOne({ _id: itemId }).then(() => {
            res.send({ status: 'Task Deleted!' })
        })
    } catch (err) {
        throw err
    }
}