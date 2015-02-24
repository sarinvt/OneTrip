var winston = require('winston');
var config = require('../config');


var customLevels = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  },
  colors: {
    debug: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red'
  }
};

var logger = new winston.Logger({
	level: 'debug',
    levels: customLevels.levels,
    transports: [
        new winston.transports.File({
            level: 'debug',
			levels: customLevels.levels,
            filename: config.logger.express,
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
			levels: customLevels.levels,
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});
winston.addColors(customLevels.colors);
module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};