var logger = require('../utils/logger');
function UserSchema() {
	this.id = '';
	this.name = '';
    this.email = '';
	this.mobile = '';
	this.secreteKey = "";
	this.createdDate = "";
};

UserSchema.prototype.getUserDetails = function () {
	//fetch user details from database
	//temporary data is created here
	var result = JSON.parse('{   "name": "sarin",   "email": "sarin.mec@gmail.com",   "mobile": "8886456708" }');
	return result;
};

UserSchema.prototype.createNewUser = function () {
	this.secreteKey = secreteGenerator();
	this.createdDate = new Date();
	//insert details of users to database
	return this.secreteKey;
};

UserSchema.prototype.initializeUser = function (postData) {
	this.name = postData.name;
	this.email = postData.email;
	this.mobile = postData.mobile;
};

var secreteGenerator = function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}


module.exports = UserSchema;