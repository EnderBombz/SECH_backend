const { Devolution } = require("../schema/schemas")

exports.getAll = async(req, res) => {
    try {
        const devolution = await Devolution.find({});
        console.log(devolution)
        res.send(devolution);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const devolution = await Devolution.findOne({ _id: query });
        console.log(devolution)
        res.send(devolution);
    } catch (err) {
        throw err
    }
}
exports.postDevolution = async(req, res) => {
    try {
        const { equip_list, user_id, devolution_id, devolution_details } = req.body;
        const item = new Devolution({
            equip_list,
            user_id,
            devolution_id,
            devolution_details
        })
        item.save()
        res.sendStatus(200)
    } catch (err) {
        throw err
    }

}
exports.putDevolution = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { equip_list, user_id, devolution_id, devolution_details } = req.body;

        Devolution.updateOne({ _id: itemId }, {
            $set: {
                equip_list,
                user_id,
                devolution_id,
                devolution_details
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
exports.deleteDevolution = async(req, res) => {
    try {
        const itemId = req.params.itemId
        Devolution.deleteOne({ _id: itemId }).then(() => {
            res.send({ status: 'Task Deleted!' })
        })
    } catch (err) {
        throw err
    }
}