function setup(app, handlers) {
	app.get('/user', handlers.account.getUser);
	app.post('/user',handlers.account.createUser);
}
exports.setup = setup;