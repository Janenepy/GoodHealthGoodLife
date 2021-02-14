var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var linkedlist = require('../linkedlist.js');
var result = new linkedlist();

router.get('/', function(req, res, next) {
    res.render("form");
  });
  router.post('/',[
    check("q1","Please fill up question 1.").not().isEmpty(),
    check("q2","Please fill up question 2.").not().isEmpty(),
    check("q3","Please fill up question 3.").not().isEmpty(),
    check("q4","Please fill up question 4.").not().isEmpty(),
    check("q5","Please fill up question 5.").not().isEmpty(),
    check("q6","Please fill up question 6.").not().isEmpty(),
    check("q7","Please fill up question 7.").not().isEmpty(),
    check("q8","Please fill up question 8.").not().isEmpty(),
    check("q9","Please fill up question 9.").not().isEmpty(),
    check("q10","Please fill up question 10.").not().isEmpty()
  ],
  function(req, res, next) {
    const results = validationResult(req);
    var errors = results.errors;
    if (!results.isEmpty()) {
     // console.log(results);
      res.render('form',{errors:errors});
     
    }else{
      //บันทึกข้อมูล
     var fs = require('fs');
     var sum = 0;
     result.prepend(req.body.q1);
     result.append(req.body.q2);
     result.append(req.body.q3);
     result.append(req.body.q4);
     result.append(req.body.q5);
     result.append(req.body.q6);
     result.append(req.body.q7);
     result.append(req.body.q8);
     result.append(req.body.q9);
     result.append(req.body.q10);
     var arr = result.toArray();
      arr.forEach(element => {
        var elements =parseInt(element);
        sum += elements ;

      });
     fs.writeFile('point.csv', sum , function (err) {
        if (err) throw err;
      //console.log('Replaced!');
      });
      //ไปที result.ejs.
      const fs2 = require('fs');
      //open file profile.csv
      const raw_profile = fs2.readFileSync('profile.csv', 'utf8');
      const data_profile  = raw_profile.split(/\r?\n/); 
      res.render('confirm',{data_profile:data_profile});
      
      res.render("confirm");
    }
  
  });
  module.exports = router;
