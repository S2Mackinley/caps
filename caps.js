// Manages the state of every package (ready for pickup, in transit, delivered, etc)
// Logs every event to the console with a timestamp and the event payload
// i.e. “EVENT {}”
'use strict';

const events = require('./events');

require('./modules/driver');
require('./modules/vendor');

events.on('newOrder', payload => {
    console.log('Event:', {
        event: 'pickup',
        time: new Date,
        payload
    })
    events.emit('pickup', payload);
});

events.on('inTransit', payload => {
    console.log('Event:', {
        event: 'in-transit',
        time: new Date,
        payload
    })
});

events.on('delivered', payload => {
    console.log('Event:', {
        event: 'delivered',
        time: new Date,
        payload
    })
});
