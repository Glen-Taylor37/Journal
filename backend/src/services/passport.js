const passport = require('passport');
const User = require('../models/user');
const config = require('../../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local options and strategy for signin
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(
	localOptions,
	async (email, password, done) => {
		// Verify credentials and call done with user
		try {
			// Retrieve user by email
			const user = await User.findOne({ where: { email: email } });
			if (!user) {
				return done(null, false);
			}

			console.log(password);

			// Check for match between signin password and stored password
			const match = await user.comparePassword(password);
			if (!match) {
				console.log('no match');
				return done(null, false, { message: 'Passwords do not match' });
			}

			return done(null, user);
		} catch (err) {
			return done(err);
		}
	}
);

// Create JWT options and strategy for signup
const jwtOptions = {
	jwtFromRequest : ExtractJwt.fromHeader('authorization'),
	secretOrKey    : config.JWT_SECRET
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
	try {
		// Extract user id from payload and retrieve user
		const user = await User.findByPk(payload.sub);
		if (user) {
			done(null, user);
		} else {
			done(null, false, {
				message : 'Could not retrieve newly created user'
			});
		}
	} catch (err) {
		return done(err);
	}
});

passport.use(jwtLogin);
passport.use(localLogin);
