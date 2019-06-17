// TIME SERVER (Exercise 10 of 13)
//
//   Write a TCP time server!
//
//   Your server should listen to TCP connections on the port provided by the
//   first argument to your program. For each connection you must write the
//   current date & 24 hour time in the format:
//
//      "YYYY-MM-DD hh:mm"
//
//   followed by a newline character. Month, day, hour and minute must be
//   zero-filled to 2 integers. For example:
//
//      "2013-07-06 17:42"
//
//   After sending the string, close the connection.

const net = require('net');
const port = process.argv[2] || 8000;

function getDate() {
  let date = new Date();
  let month = date.getMonth() >= 10 ? Number(date.getMonth()+1)  : '0'+ Number(date.getMonth()+1)
  let day = date.getDate() >= 10 ? Number(date.getDate())  : '0'+ Number(date.getDate())
  let hour = date.getHours() >= 10 ? Number(date.getHours())  : '0'+ Number(date.getHours())
  let minute = date.getMinutes() >= 10 ? Number(date.getMinutes())  : '0'+ Number(date.getMinutes())
  let formatted_date =
    date.getFullYear() +
    '-' +
    month +
    '-' +
    day +
    ' ' +
    hour +
    ':' +
    minute;
  //console.log(formatted_date);
  return formatted_date;
}

const server = net.createServer(c => {
  const new_date = getDate();
  c.write(new_date);
  c.write('\n');
  socket.end();

});

server.listen(port, () => {
  console.log(`server on port ${port}`);
});


//  OFFICIAL SOLUTION
  // var net = require('net')

  // function zeroFill(i) {
  //  return (i < 10 ? '0' : '') + i
  // }

  // function now () {
  //  var d = new Date()
  //  return d.getFullYear() + '-'
  //    + zeroFill(d.getMonth() + 1) + '-'
  //    + zeroFill(d.getDate()) + ' '
  //    + zeroFill(d.getHours()) + ':'
  //    + zeroFill(d.getMinutes())
  // }

  // var server = net.createServer(function (socket) {
  //  socket.end(now() + '\n')
  // })

  // server.listen(Number(process.argv[2]))
