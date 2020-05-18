// imports
const mongoose = require('mongoose');
const express = require("express");
const port = 8080;
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

mongoose.connect('mongodb+srv://Lavarda:VI2107vivi@@aps-5-semestre-g6df3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// Modelo requisições 
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req,res) => {
     res.json('Entrou')
})

app.use(require('./src/routes'))

app.listen(port, () => console.log(`App started in port ${port}`));