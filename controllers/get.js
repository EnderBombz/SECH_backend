const db = require('../database')

exports.get = (req, res) => {
    res.send("get");
}

exports.mongoTest = (req, res) => {
    res.send(db);
}