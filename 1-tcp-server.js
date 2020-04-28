'use strict';

const net = require('net');

const onData = (data, ...args) => {
    console.dir({ args });
    console.log(': ' + data);
};

const server = net.createServer(socket => {
    console.dir(socket.address());
    socket.setNoDelay(true);
    socket.write('');
    socket.on('data', onData);
    socket.on('error', err => {
        console.log('Socket error', err);
    });
}).listen(2000);

server.on('error', err => {
    console.log('Server error', err);
});