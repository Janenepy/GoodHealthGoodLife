var express = require('express');
var router = express.Router();


router.get('/', function(req,res) {
  const fs = require('fs');
  //open file point.csv
  const raw_point = fs.readFileSync('point.csv', 'utf8');
  const data_point  = raw_point.split(/\r?\n/);
  var data = parseInt(data_point);

  //open file point.csv
  res.render('result',{data:data});

  //console.log(data_point);
  //res.render('result',{chart:chart});
  res.render("result");

});

module.exports = router;
