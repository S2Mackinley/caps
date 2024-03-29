'use strict';

require('dotenv').config();
const host = process.env.PORT || 3000;
const io = require('socket.io')(host);
let caps = io.of('/caps');

caps.on('connection', (socket) => {

    socket.on('newOrder', payload => {
        console.log('Event:', {
            event: 'pickup',
            time: new Date,
            payload
        });
        caps.emit('pickup', payload);
    });

    socket.on('inTransit', payload => {
        console.log('Event:', {
            event: 'in-transit',
            time: new Date,
            payload
        });
        caps.emit('inTransit', payload);
    });

    socket.on('delivered', payload => {
        console.log('Event:', {
            event: 'delivered',
            time: new Date,
            payload
        });
        caps.emit('delivered', payload);
    });
})