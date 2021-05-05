'use strict';

require('dotenv').config();
const io = require('socket.io-client');
const host = process.env.HOST || 'http://localhost:3000';

const driver = io.connect(`${host}/caps`)


driver.on('pickup', payload => {
  setTimeout(() => {
    console.log(`Driver: Picked up ${payload.orderId}`);
  }, 1000)
  driver.emit('inTransit', payload);
});

driver.on('inTransit', payload => {
  setTimeout(() => {
    console.log(`Driver: Delivered order# ${payload.orderId}`);
  }, 1000)
  driver.emit('delivered', payload);
});

