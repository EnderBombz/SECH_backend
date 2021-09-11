const { Usuarios } = require("../schema/schemas")
const bcrypt = require("bcrypt")


exports.getAll = async(req, res) => {
    try {
        const usuarios = await Usuarios.find({});
        //console.log(usuarios)

        console.log(usuarios)

        /*const saltRounds = 10;
        bcrypt.hash(usuarios[1].password, saltRounds, function(err, hash) { // Salt + Hash
            bcrypt.compare(usuarios[1].password, hash, function(err, result) { // Compare
                // if passwords match
                if (result) {
                    console.log("It matches!")
                }
                // if passwords do not match
                else {
                    console.log("Invalid password!");
                }
            });
        });*/

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
        const saltRounds = 10;

        let crypt_pass
        await bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, function(err, hash) {

                const item = new Usuarios({
                    cpf: cpf,
                    userlevel: userlevel,
                    username: username,
                    password: hash,
                    email: email,
                    department: department,
                })
                item.save()
                res.sendStatus(200)
            });
        })

    } catch (err) {
        throw err
    }

}
exports.putUsuarios = async(req, res) => {
    try {
        const userId = req.params.userId

        const usuario = await Usuarios.findOne({ _id: userId });
        console.log({ old: { usuario } })

        const { cpf, userlevel, username, password, email, department } = req.body;
        console.log({ new: { cpf, userlevel, username, password, email, department } })

        Usuarios.updateOne({ _id: userId }, {
            cpf: cpf,
            userlevel: userlevel,
            username: username,
            password: password,
            email: email,
            department: department,
        }).then((response) => {
            if (response) {
                res.send({ message: `Success to update ${userId}` })
            } else {
                res.send({ message: `Invalid update` })
            }

        })
    } catch (err) {
        throw err
    }
}
exports.deleteUsuarios = async(req, res) => {
    try {
        const userId = req.params.userId
        console.log(userId)
        Usuarios.deleteOne({ _id: userId }).then(() => {
            res.send({ status: 'Task Deleted!' })
        })
    } catch (err) {
        throw err
    }
}