var mongoose = require('mongoose');
var logger = require('../utils/logger');
var UserSchema = require('../models/userSchema');


exports.getUser = function (req, res) {
	var usr = new UserSchema();
	var accessTocken = req.param("Auth-Token");
	var result = usr.getUserDetails();
	//returns resulting JSON Object
	res.redirect('http://example.com');
	
}

exports.createUser = function (req, res) {
	var postData =  JSON.parse(req.body.user);
	var usr = new UserSchema();
	usr.initializeUser(postData);
	var sKey = usr.createNewUser();
	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: 1, secrete: sKey }));
}



