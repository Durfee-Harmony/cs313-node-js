console.log('index.js running!');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(8080);
app.get('/', function (req, res) {
  res.render('index');
});

var d;
const initOptions = {
  query(e) {
    // console.log('QUERY:', e.query);
  },
  receive(data, result, e) {
    d = camelizeColumns(data);
    var h = hate(d);
  }
};

function camelizeColumns(data) {
  const tmp = data[0];
  for (const prop in tmp) {
    const camel = pgp.utils.camelize(prop);
    if (!(camel in tmp)) {
      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        d[camel] = d[prop];
        delete d[prop];
      }
    }
  }
  return tmp;
}

function hate(data) {
  console.log("HATE:", data);
  d += JSON.stringify(data);
  console.log("D:", d);
  return d;
}

const pgp = require('pg-promise')(initOptions);
var connect = {
  connectionString: 'postgres://lpdzdeczvntfek:c870d329c80fb6b49f55f425360e16bc9465fb10de5601ff67a60b61abe900f8@ec2-34-193-42-173.compute-1.amazonaws.com:5432/d3b0o3nhe1tsra',
  ssl: true,
  sslmode: require,
  rejectUnauthorized: true
}
const db = pgp(connect);
db.one('SELECT COUNT(*) FROM quote')
  .then(function (data) {
    var d = JSON.stringify(data);
    var c = JSON.parse(d).count;
    for (var i = 1; i <= c; i++) {
      db.any('SELECT * FROM quote WHERE id = $1', i)
        .then(function (d) {
          result += JSON.stringify(d);
          if (i = c) {
            // return result;
          }
        })
    }
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  });

app.get('/quotes', function (req, res) {
  var quotes = d;
  console.log("D:", d);
  console.log("QUOTES:", quotes);
  res.render('quotes', {
    data: quotes
  });
});

// app.get('/detail', function (req, res) {
//   res.send('id: ' + req.query.id);
//   res.render('detail', {
//     id: id
//   });
// });

app.get('*', function (req, res) {
  res.render('error');
});



// -------------- OLD CODE, NOT IN USE ANYMORE --------------
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   res.write('<h1>Welcome to the Home Page</h1>');
//   res.write('<button type="button" onclick="rate()">Click Here</button>');
//   res.write('<script src="index.js"></script>');
//   res.end();
// }).listen(8080);




// function allQuotes() {
//   var result;
//   db.one('SELECT COUNT(*) FROM quote')
//     .then(function (data) {
//       var d = JSON.stringify(data);
//       var c = JSON.parse(d).count;
//       for (var i = 1; i <= c; i++) {
//         db.any('SELECT * FROM quote WHERE id = $1', i)
//           .then(function (d) {
//             result += JSON.stringify(d);
//             console.log("D:", result);
//             var r = JSON.parse(result);
//             console.log("R:", r);
//             if (i = c) {
//               // console.log("RESULT:", result);
//               return "this should hold all quotes";
//             }
//           })
//       }
//     })
//     .catch(function (error) {
//       console.log('ERROR:', error)
//     });
// }