const { Devolucao } = require("../schema/schemas")

exports.getAll = async(req, res) => {
    try {
        const devolucao = await Devolucao.find({});
        console.log(devolucao)
        res.send(devolucao);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const devolucao = await Devolucao.findOne({ id_devolution: query });
        console.log(devolucao)
        res.send(devolucao);
    } catch (err) {
        throw err
    }
}
exports.postDevolucao = async(req, res) => {
    try {
        const { id_devolution, id_equip, id_user, devolution_date } = req.body;
        const item = new Devolucao({
            id_devolution: id_devolution,
            id_equip: id_equip,
            id_user: id_user,
            devolution_date: devolution_date,
        })
        item.save()
    } catch (err) {
        throw err
    }

}
exports.putDevolucao = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { id_devolution, id_equip, id_user, devolution_date } = req.body;

        Devolucao.updateOne({ id_devolution: itemId }, {
            $set: {
                id_devolution: id_devolution,
                id_equip: id_equip,
                id_user: id_user,
                devolution_date: devolution_date,
            }
        })
    } catch (err) {
        throw err
    }
}
exports.deleteDevolucao = async(req, res) => {
    try {
        const itemId = req.params.itemId
        Devolucao.deleteOne({ id_devolution: itemId })
    } catch (err) {
        throw err
    }
}