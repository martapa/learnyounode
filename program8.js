// This problem is the same as the previous problem (HTTP COLLECT) in
//   that you need to use http.get(). However, this time you will be
//   provided with three URLs as the first three command-line arguments.
//
//   You must collect the complete content provided to you by each of the
//   URLs and print it to the console (stdout). You don't need to print
//   out the length, just the data as a String; one line per URL. The
//   catch is that you must print them out in the same order as the URLs
//   are provided to you as command-line arguments.

const http = require('http');

const path = process.argv[2];

const https = require('https');




http.get(path, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    str = body.toString();
    console.log(str.length);
    console.log(str);
  });
});

//OFFICIAL SOLUTION

// var http = require('http')
//     var bl = require('bl')
//
//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err) {
//           return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })
