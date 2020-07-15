const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
//const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const gallery = require('./DB/cathegories');
const weddingData = require('./DB/wedding.json');
const kidsData = require('./DB/kids.json');
const modelingData = require('./DB/modeling.json');
const couplesData = require('./DB/couples.json');
const { cathegoriesName } = require('./helperFunctions/cathegoriesName');
const { wedding } = require('./helperFunctions/wedding');
const { kids } = require('./helperFunctions/kids');
const { modeling } = require('./helperFunctions/modeling');
const { couple } = require('./helperFunctions/couple');

//const { uuidv4 } = require('./helper-function/idGenerator')
//require('dotenv').config();

//const pool = require("./DB/index");
const dirCathegory = path.join(__dirname, '/images/cathegories-images');
const dirWedding = path.join(__dirname, '/images/Wedding');
const dirKids = path.join(__dirname, '/images/Kids');
const dirModeling = path.join(__dirname, '/images/Modeling');
const dirCouples = path.join(__dirname, '/images/Couples');






app.use(express.static(dirCathegory));
app.use(express.static(dirWedding));
app.use(express.static(dirKids));
app.use(express.static(dirModeling));
app.use(express.static(dirCouples));

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(gallery);
})

cathegoriesName.map(item => app.get(`/cathegory/${item}`, (req, res) => {
    const pathToImage = `${dirCathegory}/${item}.jpg`
  res.sendFile(pathToImage);
  }));

wedding.map(item => app.get(`/wedding/${item}`, (req, res) => {
    const pathToImage = `${dirWedding}/${item}.jpg`
    res.sendFile(pathToImage);
}));

kids.map(item => app.get(`/kids/${item}`, (req, res) => {
    const pathToImage = `${dirKids}/${item}.jpg`
    res.sendFile(pathToImage);
}));

modeling.map(item => app.get(`/modeling/${item}`, (req, res) => {
    const pathToImage = `${dirModeling}/${item}.jpg`
    res.sendFile(pathToImage);
}));
couple.map(item => app.get(`/couple/${item}`, (req, res) => {
    const pathToImage = `${dirCouples}/${item}.jpg`
    res.sendFile(pathToImage);
}));

app.get('/images/:id', (req, res) => {
    const id = req.params.id;
    if( id === 'Wedding' ) {
        res.json(weddingData);
    }
    if ( id === 'Kids' ) {
        res.json(kidsData);
    }
    if ( id === 'Modeling' ) {
        res.json(modelingData);
    }
    if ( id === 'Couples' ) {
        res.json(couplesData);
    }
    
})


const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}!`))