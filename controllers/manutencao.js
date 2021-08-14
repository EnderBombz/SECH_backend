const { SolicitacaoManutencao } = require("../schema/schemas")


exports.getAll = async(req, res) => {
    try {
        const solicitacaoManutencao = await SolicitacaoManutencao.find({});
        console.log(solicitacaoManutencao)
        res.send(solicitacaoManutencao);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.itemId;
        const solicitacaoManutencao = await SolicitacaoManutencao.findOne({ id_maintance: query });
        console.log(solicitacaoManutencao)
        res.send(solicitacaoManutencao);
    } catch (err) {
        throw err
    }
}
exports.postManutencao = async(req, res) => {
    try {
        const { id_maintance, id_equip, id_user, maintance_date, maintace_type, maintance_state } = req.body;
        const item = new SolicitacaoManutencao({
            id_maintance: id_maintance,
            id_equip: id_equip,
            id_user: id_user,
            maintance_date: maintance_date,
            maintace_type: maintace_type,
            maintance_state: maintance_state,
        })
        item.save()
    } catch (err) {
        throw err
    }

}
exports.putManutencao = async(req, res) => {
    try {
        const itemId = req.params.itemId
        const { id_maintance, id_equip, id_user, maintance_date, maintace_type, maintance_state } = req.body;

        SolicitacaoManutencao.updateOne({ id_maintance: itemId }, {
            $set: {
                id_maintance: id_maintance,
                id_equip: id_equip,
                id_user: id_user,
                maintance_date: maintance_date,
                maintace_type: maintace_type,
                maintance_state: maintance_state,
            }
        })
    } catch (err) {
        throw err
    }
}
exports.deleteManutencao = async(req, res) => {
    try {
        const itemId = req.params.itemId
        SolicitacaoManutencao.deleteOne({ id_equip: itemId })
    } catch (err) {
        throw err
    }
}