const { Werehouse } = require("../schema/schemas");

exports.getAll = async(req, res) => {
    try {
        const estoque = await Werehouse.find({});
        console.log(estoque);
        res.send(estoque);
    } catch (err) {
        throw err;
    }
};
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const estoque = await Werehouse.findOne({ _id: query });
        console.log(estoque);
        res.send(estoque);
    } catch (err) {
        throw err;
    }
};
exports.getComputers = async(req, res) => {
    try {
        const estoque = await Werehouse.find({ equip_type: "computer" });
        console.log(estoque);
        res.send(estoque);
    } catch (err) {
        throw err;
    }
};
exports.getFreeComputers = async(req, res) => {
    try {
        const estoque = await Werehouse.find({ equip_type: "computer", equip_state: "livre" });
        console.log(estoque);
        res.send(estoque);
    } catch (err) {
        throw err;
    }
};
exports.getPeripheals = async(req, res) => {
    try {
        const estoque = await Werehouse.find({ equip_type: "peripheals" });
        console.log(estoque);
        res.send(estoque);
    } catch (err) {
        throw err;
    }
};
exports.getFreePeripheals = async(req, res) => {
    try {
        const estoque = await Werehouse.find({ equip_type: "peripheals", equip_state: "livre" });
        console.log(estoque);
        res.send(estoque);
    } catch (err) {
        throw err;
    }
};
exports.postWerehouse = async(req, res) => {
    try {
        const {
            equip_type,
            equip_details,
            equip_spec,
            equip_state,
            equip_class,
            equip_name
        } = req.body;
        const item = new Werehouse({
            equip_type: equip_type,
            equip_details: equip_details,
            equip_spec: equip_spec,
            equip_state: equip_state,
            equip_class: equip_class,
            equip_name: equip_name
        });
        item.save();
        res.send({
            message: "cadastrado com sucesso",
            payload: {
                equip_type: equip_type,
                equip_details: equip_details,
                equip_spec: equip_spec,
                equip_state: equip_state,
                equip_class: equip_class,
                equip_name: equip_name
            }
        });
    } catch (err) {
        throw err;
    }
};
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
                equip_class: equip_class,
                equip_name: equip_name
            }
        }).then((response) => {
            if (response) {
                res.send({ message: `Success to update ${itemId}` });
            } else {
                res.send({ message: `Invalid update` });
            }
        });
    } catch (err) {
        throw err;
    }
};
exports.putfreeWerehouse = async(req, res) => {
    try {
        const itemId = req.params.itemId;
        const { equip_list } = req.body;

        const list = JSON.parse(equip_list);
        console.log(list);

        list.forEach(element => {
            element.equip_state = "livre";
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
                    console.log({ message: `Success to update ${element._id}` })
                    res.send({ message: `Success to update ${element._id}` })
                } else {
                    console.log({ message: `Invalid update` })
                    res.send({ message: `Invalid update` })
                }
            })
        })

    } catch (err) {
        throw err;
    }
};
exports.deleteWerehouse = async(req, res) => {
    try {
        const itemId = req.params.itemId;
        console.log(itemId);
        Werehouse.deleteOne({ _id: itemId }).then(() => {
            res.send({ status: "Task Deleted!" });
        });
    } catch (err) {
        throw err;
    }
};