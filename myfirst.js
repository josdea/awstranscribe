var http = require('http');
// var test = require('./mymod');
var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   // res.write(test.yay());
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.write(txt);
//   // res.write(req.url);
//   // res.end('Hello World!');
// }).listen(8080);

// READ FILES

var config = require('./asrOutput.json');
 console.log(config.results);


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(test.yay());
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;
  res.write(config.results);
  // res.write(req.url);
  // res.end('Hello World!');
}).listen(8080);

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   // fs.readFile('asrOutput.txt', function (err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
    
    
//     var obj = JSON.parse(fs.readFileSync('asrOtuput.txt', 'utf8'));
// res.write(obj);
//     // var data2 = data;
//     // var jsonContent = JSON.parse(data);
//     // res.write(jsonContent.results);
//     // res.write('<h1>Test</h1>');
//     res.end();
//   // });
// }).listen(8080);


// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);


// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function (err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);


// var fs = require('fs');

// var test = 'this is stuff\ranother line';

// fs.writeFile('mynewfile2.txt', test, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// fs.unlink('mynewfile2.txt', function(err){
//   if (err) throw err;
//   console.log("file deleted");
// });

// fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function (err, data) {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/html' });
//       return res.end("404 Not Found");
//     }
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);