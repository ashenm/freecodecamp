/**
 * Time Server
 * Exercise 10 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const net = require('net');
const port = Number(process.argv[2]);

net.createServer(socket => socket.end(`${generate()}\n`)).listen(port);

function padding(number) {
  return (number < 10) ? `0${number}` : number;
}

function generate() {
  const date = new Date();
  return date.getFullYear()
      + '-' + padding(date.getMonth() + 1)
      + '-' + padding(date.getDate())
      + ' ' + padding(date.getHours())
      + ':' + padding(date.getMinutes() + 1);
}

