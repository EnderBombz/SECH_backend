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


const EquipmentRequest = mongoose.model("equipment_request", {
    equip_list: Array,
    user_data: Object,
    request_date: String,
    request_status: String,
    request_type: String,
    request_details: String,
    request_response: String
});


module.exports = {
    Werehouse,
    User,
    EquipmentRequest,
};