const { SolicitacaoEquipamento } = require("../schema/schemas")


exports.getAll = async(req, res) => {
    try {
        const solicitacaoEquipamento = await SolicitacaoEquipamento.find({});
        console.log(solicitacaoEquipamento)
        res.send(solicitacaoEquipamento);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const solicitacaoEquipamento = await SolicitacaoEquipamento.findOne({ id_request: query });
        console.log(solicitacaoEquipamento)
        res.send(solicitacaoEquipamento);
    } catch (err) {
        throw err
    }
}
exports.postEquipamento = async(req, res) => {
    try {
        const { id_request, id_equip, id_user, devolution_date } = req.body;
        const item = new SolicitacaoEquipamento({
            id_request: id_request,
            id_equip: id_equip,
            id_user: id_user,
            devolution_date: devolution_date,
        })
        item.save()
    } catch (err) {
        throw err
    }

}
exports.putEquipamento = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { id_request, id_equip, id_user, devolution_date } = req.body;

        SolicitacaoEquipamento.updateOne({ id_request: itemId }, {
            $set: {
                id_request: id_request,
                id_equip: id_equip,
                id_user: id_user,
                devolution_date: devolution_date,
            }
        })
    } catch (err) {
        throw err
    }
}
exports.deleteEquipamento = async(req, res) => {
    try {
        const itemId = req.params.itemId
        SolicitacaoEquipamento.deleteOne({ id_request: itemId })
    } catch (err) {
        throw err
    }
}