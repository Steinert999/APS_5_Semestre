const api = require('../config/connections')
const DataLogin = require('../models/DataLogin')
const DataConfirmed = require('../models/DataConfirmed')

exports.create = async (req, res) => {
    let user = new DataLogin({ email: req.headers.email, password: req.headers.password })
    console.log("NEW USER", user)
    await user.save()

    res.status(200).send({
        message: "Usuario cadastrado"
    })
}

exports.authenticate = async (req, res) => {
    const r = await DataLogin.find({
        email: req.body.email,
        password: req.body.password,
    })

    return res
}

exports.all_users = async (req,res,next) => {
    const users = DataLogin.find({
        email: 'vitor',
        password: 'teste',
    }).lean()
    console.log("USERS", users)
    return res.json()
}