const { User } = require("../schema/schemas")
const bcrypt = require("bcrypt")


exports.getAll = async(req, res) => {
    try {
        const user = await User.find({});

        // console.log(user)

        res.send(user);
    } catch (err) {
        throw err
    }
}
exports.getOne = async(req, res) => {
    try {
        let query = req.params.userId;
        const user = await User.findOne({ _id: query });
        //console.log(user)
        res.send(user);
    } catch (err) {
        throw err
    }
}
exports.getByEmail = async(req, res) => {
    try {
        let query = req.body.email;
        const user = await User.findOne({ "email": query });
        // console.log(user)

        if (user) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }

    } catch (err) {
        throw err
    }
}

exports.postUser = async(req, res) => {
    try {


        const {
            cpf,
            userlevel,
            username,
            password,
            email,
            department
        } = req.body;
        const saltRounds = 10;

        let crypt_pass
        await bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, function(err, hash) {

                const item = new User({
                    cpf: cpf,
                    userlevel: userlevel,
                    username: username,
                    password: hash,
                    email: email,
                    department: department,
                    equipments: [],
                })
                item.save()
                res.sendStatus(200)
            });
        })

    } catch (err) {
        throw err
    }

}
exports.putUser = async(req, res) => {
    try {
        const userId = req.params.userId

        const user = await User.findOne({ _id: userId });
        // console.log({ old: { user } })

        const { cpf, userlevel, username, password, email, department } = req.body;
        //  console.log({ new: { cpf, userlevel, username, password, email, department } })

        User.updateOne({ _id: userId }, {
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
exports.deleteUser = async(req, res) => {
    try {
        const userId = req.params.userId
            //  console.log(userId)
        User.deleteOne({ _id: userId }).then(() => {
            res.send({ status: 'Task Deleted!' })
        })
    } catch (err) {
        throw err
    }
}