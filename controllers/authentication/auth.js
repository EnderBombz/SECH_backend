const db = require("../../database");
const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.auth = (req, res) => {
    const user = {
        id: 1,
        name: "Gabriel Martani",
        company: 'Fatec',
        website: 'https://github.com/EnderBombz',
    }

    return res.json({
        user,
        token: jwt.sign(user, process.env.JWT_PASSWORD)
    })
}

exports.users = (req, res) => {

    return res.json([{
            id: 1,
            name: "Gabriel Martani",
            company: 'Fatec',
            website: 'https://github.com/EnderBombz',
        },
        {
            id: 2,
            name: "Giovanna Martani",
            company: 'Shark',
            website: 'https://github.com/EnderBombz',
        },
        {
            id: 3,
            name: "Giuliano Martani",
            company: 'Heineken',
            website: 'https://github.com/EnderBombz',
        },
        {
            id: 4,
            name: "Kátia Martani",
            company: 'Delicias da Ka',
            website: 'https://github.com/EnderBombz',
        }
    ])
}