const DataLogin = require('../models/DataLogin')

const registerUser = async (req,res,next) => {
    let user = new DataLogin({ email: req.headers.email, password: req.headers.password })
    await user.save()
    console.log("NEW USER", user)
    res.status(200).send({
        message: "Usuário cadastrado",
        login: req.headers.email,
    })
}

const login = async (req,res,next)  => {
    const r = await DataLogin.find({
        email: req.headers.email,
        password: req.headers.password,
    }).lean()

    console.log("USUARIO ENCONTRADO", r, req.headers)

    if ( r.length ) {
        res.status(200).send({
            message: `Você está logado como ${req.headers.email}`,
        })
    } else {
        res.status(404).send({
            message: `O Usuário ${req.headers.email} não foi encontrado`,
        })
    }
}

const allUsers = async (req,res,next) => {
    let users = await DataLogin.find({}).lean()
    console.log("USERS", users)
    users = users.map( (v,i) => {
        return v.email
    })
    res.status(200).send({
        message: "Usuários encontrados",
        value: JSON.stringify(users),
    })
}

module.exports = {
    registerUser,
    login,
    allUsers,
}