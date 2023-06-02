const express = require('express');
let bodyParser = require('body-parser');
let  routs = require('./routs.js');
const { urlencoded } = require('body-parser');
let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/",routs);

app.listen(3000);

