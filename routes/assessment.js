var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var linkedlist = require('../linkedlist.js');
var result = new linkedlist();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("assessment");
});
/*send data from assessent.ejs*/ 
router.post('/',[
  check("name","Please input your name.").not().isEmpty(),
  check("age","Please input your age in numbers.").not().isEmpty().isNumeric(),
  check("weight","Please input your weight in numbers.").not().isEmpty().isNumeric(),
  check("height","Please input your height in float.").not().isEmpty().isFloat(),
],
 function(req, res, next) {
  const results = validationResult(req);
  var errors = results.errors;
  if (!results.isEmpty()) {

    res.render('assessment',{errors:errors});
   
  }else
    //บันทึกข้อมูล
   var fs = require('fs');
   var bmi = (req.body.weight/(req.body.height**2)).toFixed(2);
   result.prepend(req.body.name);
   result.append(req.body.age);
   result.append(bmi);
     if(bmi<18.5){
       result.append('Underweight');
     }else if(bmi>=18.5 && bmi<=24.9){
      result.append('Normal range');
     }else if(bmi>=25.0 && bmi<=21.9){
      result.append('Overweight');
    }else if(bmi>=30.0 && bmi<=34.9){
      result.append('Obese Class I');
    }else if(bmi>=35.0 && bmi<=39.9){
      result.append('Obese Class II');
    }else{
      result.append('Obese Class III');
    }
    fs.writeFile('profile.csv', 'Name : '+result.deleteHead()+'\n'+'Age : '+result.deleteHead()+'\n'+'BMI : '+result.getHead()+'\n'+'Weight Status Category : '+result.getTail(), function (err) {
      if (err) throw err;
    });
    //ไปที่ form.ejs
    res.render("form");
  
});





module.exports = router;
