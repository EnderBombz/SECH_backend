const { Usuarios } = require("../schema/schemas")


exports.getAll = async(req, res) => {
    try {
        const usuarios = await Usuarios.find({});
        console.log(usuarios)
        res.send(usuarios);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.userId;
        const usuarios = await Usuarios.findOne({ cpf: query });
        console.log(usuarios)
        res.send(usuarios);
    } catch (err) {
        throw err
    }
}
exports.postUsuarios = async(req, res) => {
    try {
        const { cpf, userlevel, username, password, email, department } = req.body;
        const item = new Usuarios({
            cpf: cpf,
            userlevel: userlevel,
            username: username,
            password: password,
            email: email,
            department: department,
        })
        item.save()
    } catch (err) {
        throw err
    }

}
exports.putUsuarios = async(req, res) => {
    try {
        const userId = req.params.userId
        const { cpf, userlevel, username, password, email, department } = req.body;

        Usuarios.updateOne({ id_request: userId }, {
            $set: {
                cpf: cpf,
                userlevel: userlevel,
                username: username,
                password: password,
                email: email,
                department: department,
            }
        })
    } catch (err) {
        throw err
    }
}
exports.deleteUsuarios = async(req, res) => {
    try {
        const userId = req.params.userId
        Usuarios.deleteOne({ cpf: userId })
    } catch (err) {
        throw err
    }
}