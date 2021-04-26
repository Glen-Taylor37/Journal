//const userRepo = require('../db/userRepo');
const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.JWT_SECRET);
}

exports.signup = async (req, res, next) => {
	// Is email taken? If so, return error
	// Otherwise create a new user
	const signUpEmail = req.body.email;
	const password = req.body.password;

	if (!signUpEmail || !password) {
		return res
			.status(422)
			.send({ error: 'You must provide an email and password' });
	}

	try {
		const existingUser = await User.findOne({
			where : {
				email : signUpEmail
			}
		});
		if (existingUser) {
			return res.status(422).send({ error: 'Email is in use' });
		}
		// create and save user
		const newUser = await User.build({
			email     : signUpEmail,
			password  : password,
			firstName : req.body.firstName,
			lastName  : req.body.lastName
		});

		const saveResult = await newUser.save();

		res.json({ token: tokenForUser(newUser) });
	} catch (err) {
		console.log(err);
		return res.status(422).send({ error: 'Could not save user' });
	}
};

exports.signin = async (req, res, next) => {
	// Credentials authenticated - provide token
	res.send({ token: tokenForUser(req.user) });
};
