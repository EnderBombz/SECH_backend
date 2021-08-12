const mongoose = require("./../database/index");

const Estoque = mongoose.model("estoque", {
    id_equip: Number,
    equip_type: String,
    equip_description: String,
    equip_provider: String,
    equip_spec: String,
    equip_state: String,
})

const Usuarios = mongoose.model("usuarios", {
    id_user: Number,
    userlevel: String,
    username: String,
    password: String,
    email: String,
    cpf: String,
    department: String,
})

const Devolucao = mongoose.model("devolucao", {
    id_devolution: Number,
    id_equip: String,
    id_user: String,
    devolution_date: Date,
})

const SolicitacaoEquipamento = mongoose.model("solicitacao_equipamento", {
    id_request: Number,
    id_equip: String,
    id_user: String,
    devolution_date: Date,
})

const SolicitacaoManutencao = mongoose.model("solicitacao_manutencao", {
    id_maintance: Number,
    id_equip: String,
    id_user: String,
    maintance_date: Date,
    maintace_type: String,
    maintance_state: String,
})




module.exports = { Estoque, Usuarios, Devolucao, SolicitacaoEquipamento, SolicitacaoManutencao };