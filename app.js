// imports
const mongoose = require('mongoose');
const express = require("express");
const port = 8080;
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

mongoose.connect('mongodb+srv://login:senhacluster?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

// Modelo requisições 
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req,res) => {
     res.json('Entrou')
})

/**
 app.get('/geral', (req,res) => {
        res.json(cities)
})
    
let state = ''
app.get(`/estado`, (req,res) => {
    res.json(state)
})
 */

app.use(require('./src/routes'))

app.listen(port, () => console.log(`App started in port ${port}`));