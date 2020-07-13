const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
//const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const { cathegoriesName } = require('./helperFunctions/cathegoriesName')
//const { uuidv4 } = require('./helper-function/idGenerator')
//require('dotenv').config();

//const pool = require("./DB/index");
const dir = path.join(__dirname, '/images/cathegories-images');

app.use(express.static(dir));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(dir)
})

cathegoriesName.map(item => app.get(`/images/${item}`, (req, res) => {
    const pathToImage = `${dir}/${item}.jpg`
  res.sendFile(pathToImage);
  }));

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}!`))