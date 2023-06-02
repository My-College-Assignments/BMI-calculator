var express = require('express');


let router = express.Router();
let height = 1;
let weight = 1;

router.get("/", function (req, res) {
res.sendFile(__dirname + "/public/bmi.html");
});

router.post("/", function (req, res) {

    console.log(req.body);
    height = req.body.height;
    weight = req.body.weight;

    let bmi = calculateBMI(weight,height).toFixed(1);
    let result = require("./templates/bmi_template.js");

    res.send(result.replace(`<p id="result"></p>`,`<p id="result"><h2>Your BMI is : ${bmi}</h2></p>`))

}); 


function calculateBMI(weight, height) {

let h = height / 100;
var bmi = weight / (h * h);

return bmi;

}


module.exports = router;