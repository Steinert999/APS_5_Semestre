// imports
const mongoose = require('mongoose');
const express = require("express");
const port = 8080;
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

/**
 * Connect to db with mongoose
 *  mongoose.connect('', {
        useNewUrlParser: true,
    });
*/

// Modelo requisições 

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req,res) => {
     res.json('Entrou')
})

let cities = ''

app.get(`${cities}`, (req,res) => {
    res.json(cities)
})

let state = ''
app.get(`${state}`, (req,res) => {
    res.json(state)
})

let rota = ''
app.post(`${rota}`, (req, res) => {
    list.push(req.body)
    res.json({ status: '' })
})

app.get('https://api.spotify.com/v1/albums', (req,res) => {
    console.log("res", JSON.stringify(res))
})

app.listen(port, () => console.log(`App started in port ${port}`));