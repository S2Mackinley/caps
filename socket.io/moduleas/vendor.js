'use strict';

require('dotenv').config();
const faker = require('faker');
const io = require('socket.io-client');
let host = process.env.HOST || 'http://localhost:3000';

const vendor = io.connect(`${host}/caps`);

setInterval(() => {
    let newOrder = {
        storeName: process.env.STORE,
        name: faker.name.findName(),
        orderId: faker.datatype.uuid(),
        address: faker.address.city()
    }
    vendor.emit('newOrder', newOrder);
}, 5000);

vendor.on('delivered', payload => {
    console.log((`Order ${payload.orderId} has been delivered`), '\n', '--------');
});

