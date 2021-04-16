const users = require('./users');
const journals = require('./journals');

module.exports = (app) => {
	app.use(users);
	app.use(journals);
};
