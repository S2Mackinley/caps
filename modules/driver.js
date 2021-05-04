// Monitor the system for events …
// On the ‘pickup’ event …
// Wait 1 second
// Log “DRIVER: picked up [ORDER_ID]” to the console.
// Emit an ‘in-transit’ event with the payload you received
// Wait 3 seconds
// Log “delivered” to the console
// Emit a ‘delivered’ event with the same payload

const events = require('../events');

events.on('pickup', payload => {
    setTimeout(() => {
        console.log(`Driver: picked up ${payload.OrderId}`);
        events.emit('inTransit', payload);
    }, 1000)
})
events.on('inTransit', payload => {
    setTimeout(() => {
        console.log(`Driver: in-transit ${payload.OrderId}`);
        events.emit('delivered', payload);
    }, 3000)
})
