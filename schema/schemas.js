const mongoose = require("./../database/index");

const Werehouse = mongoose.model("werehouse", {
    equip_type: String,
    equip_class: String,
    equip_name: String,
    equip_details: String,
    equip_spec: String,
    equip_state: String
});

const User = mongoose.model("user", {
    cpf: String,
    userlevel: String,
    username: String,
    password: String,
    email: String,
    department: String,
    equipments: Array,
});

const Devolution = mongoose.model("devolution", {
    equip_list: Array,
    user_id: String,
    devolution_date: String,
    devolution_details: String
});

const EquipmentRequest = mongoose.model("equipment_request", {
    equip_list: Array,
    user_id: String,
    request_date: String,
    request_status: String,
    request_type: String,
    request_details: String,
    request_response: String
});

const MaintanceRequest = mongoose.model("maintance_request", {
    equip_list: Array,
    user_id: String,
    request_date: Date,
    maintace_details: String
});

module.exports = {
    Werehouse,
    User,
    Devolution,
    EquipmentRequest,
    MaintanceRequest
};