'use strict';

const PORT = process.env.PORT || 3000;
const io = require('socet.io')(PORT);

require('./caps')(io);
require('./moduleas/driver')(io);
require('./moduleas/vendor')(io);
