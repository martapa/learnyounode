// Write an HTTP server that serves JSON data when it receives a GET request
//   to the path '/api/parsetime'. Expect the request to contain a query string
//   with a key 'iso' and an ISO-format time as the value.
//
//   For example:
//
//   /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
//   The JSON response should contain only 'hour', 'minute' and 'second'
//   properties. For example:
//
//      {
//        "hour": 14,
//        "minute": 23,
//        "second": 15
//      }
//
//   Add second endpoint for the path '/api/unixtime' which accepts the same
//   query string but returns UNIX epoch time in milliseconds (the number of
//   milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
//   For example:
//
//      { "unixtime": 1376136615474 }
//
//   Your server should listen on the port provided by the first argument to
//   your program.
//


const http = require('http');
const url = require('url')

const port = process.argv[2] || 8000;

function getTimeObject(isoTime){
  const date = new Date(isoTime);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const timeObj = {
    "hour":hour,
    "minute":minute,
    "second":second,
  }
  return timeObj
}

function getTimeUnix(isoTime){
  const date = new Date(isoTime);
  const milliseconds = date.getTime();
  const timeObj = {
    "unixtime": milliseconds
  }
  return timeObj;
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const urlParsed = url.parse(req.url, true)
  const isoTime = urlParsed.query.iso
  if (urlParsed.pathname === '/api/parsetime'){
    const r = getTimeObject(isoTime);
    res.end(JSON.stringify(r));

    console.log(new Date())
  }
  if (urlParsed.pathname === '/api/unixtime'){
    const r = getTimeUnix(isoTime);
    res.end(JSON.stringify(r));

    console.log(urlParsed)
  }
  res.end();
}).listen(port);



//OFFICIAL SOLUTION
//
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
