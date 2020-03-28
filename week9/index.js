console.log('index.js running!');
var http = require('http');
var request = function onRequest(req){
  http.createServer(function (req, res) {
  if (req) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('<h1>Welcome to the Home Page</h1>');
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('<h1>Error #404: Page not Found</h1>');
  }
  res.end();
}).listen(8080);
}
console.log(request);

function calculateRate(weight, mail) {
  if (mail = 1){
    if (weight <= 1){
      return 0.55;
    } else if (weight <= 2){
      return 0.70;
    } else if (weight <= 3) {
      return 0.85;
    } else if (weight <= 3.5) {
      return 1.00;
    } else {
      return "invalid weight";
    }
  } else if (mail = 2){
    if (weight <= 1) {
      return 0.50;
    } else if (weight <= 2) {
      return 0.65;
    } else if (weight <= 3) {
      return 0.80;
    } else if (weight <= 3.5) {
      return 0.95;
    } else {
      return "invalid weight";
    }
  } else if (mail = 3){
    if (weight <= 1) {
      return 1.00;
    } else if (weight <= 2) {
      return 1.20;
    } else if (weight <= 3) {
      return 1.40;
    } else if (weight <= 4) {
      return 1.60;
    } else if (weight <= 5) {
      return 1.80;
    } else if (weight <= 6) {
      return 2.00;
    } else if (weight <= 7) {
      return 2.20;
    } else if (weight <= 8) {
      return 2.40;
    } else if (weight <= 9) {
      return 2.60;
    } else if (weight <= 10) {
      return 2.80;
    } else if (weight <= 11) {
      return 3.00;
    } else if (weight <= 12) {
      return 3.20;
    } else if (weight <= 13) {
      return 3.40;
    } else {
      return "invalid weight";
    }
  } else if (mail = 4) {
    if (weight <= 1) {
      return 3.80;
    } else if (weight <= 2) {
      return 3.80;
    } else if (weight <= 3) {
      return 3.80;
    } else if (weight <= 4) {
      return 3.80;
    } else if (weight <= 5) {
      return 4.60;
    } else if (weight <= 6) {
      return 4.60;
    } else if (weight <= 7) {
      return 4.60;
    } else if (weight <= 8) {
      return 4.60;
    } else if (weight <= 9) {
      return 5.30;
    } else if (weight <= 10) {
      return 5.30;
    } else if (weight <= 11) {
      return 5.30;
    } else if (weight <= 12) {
      return 5.30;
    } else if (weight <= 13) {
      return 5.90;
    } else {
      return "invalid weight";
    }
  }
}

function rate() {
  var express = require('express');
  var app = express();
  app.set('view engine', 'ejs');

  var select = document.getElementById("mail");
  var mail = select.options[select.selectedIndex].value;
  var weight = document.getElementById("weight").value;
  var rate = calculateRate(weight, mail);
  if(rate = "invalid weight"){
    return rate;
  } else {
    app.get('/', function (req, res) {
      res.render('index', {
        title: "EJS Page",
        weight: weight,
        mail: mail,
        rate: rate
      });
    });
  }
}