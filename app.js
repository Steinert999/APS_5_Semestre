const express = require("express");
const port = 8080;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./src/config/connect-db')
const routes = require('./src/routes');

database.connect()
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())

app.get('/', (req,res) => {
    res.json('Entrou')
})

app.use(routes)

app.listen(port, () => console.log(`App started in port ${port}`));