// Declare your store name (perhaps in a .env file, so that this module is re-usable)
// Every 5 seconds, simulate a new customer order
// Create a fake order, as an object:
// storeName, orderId, customerName, address
// Emit a ‘pickup’ event and attach the fake order as payload
// HINT: Have some fun by using the faker library to make up phony information
// Monitor the system for events …
// Whenever the ‘delivered’ event occurs
// Log “thank you” to the console


'use strict';

const faker = require('faker');
const events = require('../events');
require('dotenv').config();


setInterval(() => {

    let newOrder = {
        StoreName: process.env.STORE,
        Name: faker.name.findName(),
        OrderId: faker.datatype.uuid(),
        Address: faker.address.streetAddress(),
        City: faker.address.city(),
        ZipCode: faker.address.zipCodeByState(),
        Phone: faker.phone.phoneNumberFormat(),
        Card: faker.finance.creditCardNumber(),
        CVV: faker.finance.creditCardCVV(),
        Price: '$' + faker.finance.amount(),
        DriverListeningTo: faker.music.genre()
    }
    events.emit('newOrder', newOrder);
}, 5000);
