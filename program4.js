//
//   Write a program that uses a single asynchronous filesystem operation to
//   read a file and print the number of newlines it contains to the console
//   (stdout), similar to running cat file | wc -l.
//
//   The full path to the file to read will be provided as the first
//   command-line argument.
//https://github.com/maxogden/art-of-node#callbacks <--- useful link

const fs = require("fs");

const input_file = process.argv[2];
let lines = undefined;

function fileLines(callback) {
  fs.readFile(input_file,'utf8', function doneReading(err, file_contents) {
    //console.log(input_file)
    //lines = file_contents.toString()
    lines = file_contents.split('\n').length - 1
    callback()
  })
}

function logMyNumber() {
  console.log(lines)
}
fileLines(logMyNumber)

//------OFFICIAL SOLUTION---------//

// var fs = require('fs')
//     var file = process.argv[2]
//
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
