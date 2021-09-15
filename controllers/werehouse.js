const { Werehouse } = require("../schema/schemas")

exports.getAll = async(req, res) => {
    try {
        const estoque = await Werehouse.find({});
        console.log(estoque)
        res.send(estoque);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const estoque = await Werehouse.findOne({ _id: query });
        console.log(estoque)
        res.send(estoque);
    } catch (err) {
        throw err
    }
}
exports.getComputers = async(req, res) => {
    try {
        const estoque = await Werehouse.find({ equip_type: "computer" });
        console.log(estoque)
        res.send(estoque);
    } catch (err) {
        throw err
    }
}
exports.getPeripheals = async(req, res) => {
    try {

        const estoque = await Werehouse.find({ equip_type: "peripheals" });
        console.log(estoque)
        res.send(estoque);
    } catch (err) {
        throw err
    }
}
exports.postWerehouse = async(req, res) => {
    try {
        const { equip_type, equip_details, equip_spec, equip_state } = req.body;
        const item = new Werehouse({
            equip_type: equip_type,
            equip_details: equip_details,
            equip_spec: equip_spec,
            equip_state: equip_state,
        })
        item.save()
        res.send({
            message: "cadastrado com sucesso",
            payload: {
                equip_type: equip_type,
                equip_details: equip_details,
                equip_spec: equip_spec,
                equip_state: equip_state,
            }
        });
    } catch (err) {
        throw err
    }


}
exports.putWerehouse = async(req, res) => {
    try {
        const itemId = req.params.itemId;

        const { equip_type, equip_details, equip_spec, equip_state } = req.body;
        Werehouse.updateOne({ id_equip: itemId }, {
            $set: {
                equip_type: equip_type,
                equip_details: equip_details,
                equip_spec: equip_spec,
                equip_state: equip_state,
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
exports.deleteWerehouse = async(req, res) => {

    try {
        const itemId = req.params.itemId
        console.log(itemId)
        Werehouse.deleteOne({ _id: itemId }).then(() => {
            res.send({ status: 'Task Deleted!' })
        })
    } catch (err) {
        throw err
    }
}