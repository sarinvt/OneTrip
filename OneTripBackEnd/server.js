var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var logger = require('./utils/logger');
var AccountHandler = require('./handlers/AccountHandler');
var routes = require('./routes/routes');

app.use(bodyParser.json({ strict : true }));
app.use(bodyParser.urlencoded({  extended: true }));

var handlers = {
  account: AccountHandler

};

var start = function(){
	logger.debug("Starting the Server");
	routes.setup(app, handlers); 
	var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;	
	logger.debug("Example app listening at http://%s:%s", host, port);
	configErrorHandlers();
});
}


var configErrorHandlers = function() {	
	
	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});
	// error handlers
	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err
			});
		});
	}
	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
}

exports.start = start;