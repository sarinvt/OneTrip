var config = require('./config');
var winston = require('winston');
var server = require('./server');
//create winston logger
var logger = require('./utils/logger');

// We will log all uncaught exceptions into exceptions.log
winston.handleExceptions(new winston.transports.File({
	filename: config.logger.exception
}));
//Starting the NodeJs Server
server.start();
logger.debug("Successfully started web server. Waiting for incoming connections...");